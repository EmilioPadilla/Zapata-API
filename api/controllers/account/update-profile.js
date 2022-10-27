module.exports = {


  friendlyName: 'Update profile',


  description: 'Update the profile for the logged-in User.',


  inputs: {

    full_name: {
      type: 'string'
    },

    email_address: {
      type: 'string'
    },

  },


  exits: {

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function ({full_name, email_address}) {

    var newemail_address = email_address;
    if (newemail_address !== undefined) {
      newemail_address = newemail_address.toLowerCase();
    }

    // Determine if this request wants to change the current user's email address,
    // revert her pending email address change, modify her pending email address
    // change, or if the email address won't be affected at all.
    var desiredEmailEffect;// ('change-immediately', 'begin-change', 'cancel-pending-change', 'modify-pending-change', or '')
    if (
      newemail_address === undefined ||
      (this.req.me.emailStatus !== 'change-requested' && newemail_address === this.req.me.email_address) ||
      (this.req.me.emailStatus === 'change-requested' && newemail_address === this.req.me.emailChangeCandidate)
    ) {
      desiredEmailEffect = '';
    } else if (this.req.me.emailStatus === 'change-requested' && newemail_address === this.req.me.email_address) {
      desiredEmailEffect = 'cancel-pending-change';
    } else if (this.req.me.emailStatus === 'change-requested' && newemail_address !== this.req.me.email_address) {
      desiredEmailEffect = 'modify-pending-change';
    } else if (!sails.config.custom.verifyemail_addresses || this.req.me.emailStatus === 'unconfirmed') {
      desiredEmailEffect = 'change-immediately';
    } else {
      desiredEmailEffect = 'begin-change';
    }


    // If the email address is changing, make sure it is not already being used.
    if (_.contains(['begin-change', 'change-immediately', 'modify-pending-change'], desiredEmailEffect)) {
      let conflictingUser = await DefaultUser.findOne({
        or: [
          { email_address: newemail_address },
          { emailChangeCandidate: newemail_address }
        ]
      });
      if (conflictingUser) {
        throw 'emailAlreadyInUse';
      }
    }


    // Start building the values to set in the db.
    // (We always set the full_name if provided.)
    var valuesToSet = {
      full_name,
    };

    switch (desiredEmailEffect) {

      // Change now
      case 'change-immediately':
        _.extend(valuesToSet, {
          email_address: newemail_address,
          emailChangeCandidate: '',
          emailProofToken: '',
          emailProofTokenExpiresAt: 0,
          emailStatus: this.req.me.emailStatus === 'unconfirmed' ? 'unconfirmed' : 'confirmed'
        });
        break;

      // Begin new email change, or modify a pending email change
      case 'begin-change':
      case 'modify-pending-change':
        _.extend(valuesToSet, {
          emailChangeCandidate: newemail_address,
          emailProofToken: await sails.helpers.strings.random('url-friendly'),
          emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
          emailStatus: 'change-requested'
        });
        break;

      // Cancel pending email change
      case 'cancel-pending-change':
        _.extend(valuesToSet, {
          emailChangeCandidate: '',
          emailProofToken: '',
          emailProofTokenExpiresAt: 0,
          emailStatus: 'confirmed'
        });
        break;

      // Otherwise, do nothing re: email
    }

    // Save to the db
    await DefaultUser.updateOne({id: this.req.me.id })
    .set(valuesToSet);

    // If this is an immediate change, and billing features are enabled,
    // then also update the billing email for this user's linked customer entry
    // in the Stripe API to make sure they receive email receipts.
    // > Note: If there was not already a Stripe customer entry for this user,
    // > then one will be set up implicitly, so we'll need to persist it to our
    // > database.  (This could happen if Stripe credentials were not configured
    // > at the time this user was originally created.)
    if(desiredEmailEffect === 'change-immediately' && sails.config.custom.enableBillingFeatures) {
      let didNotAlreadyHaveCustomerId = (! this.req.me.stripeCustomerId);
      let stripeCustomerId = await sails.helpers.stripe.saveBillingInfo.with({
        stripeCustomerId: this.req.me.stripeCustomerId,
        email_address: newemail_address
      }).timeout(5000).retry();
      if (didNotAlreadyHaveCustomerId){
        await DefaultUser.updateOne({ id: this.req.me.id })
        .set({
          stripeCustomerId
        });
      }
    }

    // If an email address change was requested, and re-confirmation is required,
    // send the "confirm account" email.
    if (desiredEmailEffect === 'begin-change' || desiredEmailEffect === 'modify-pending-change') {
      await sails.helpers.sendTemplateEmail.with({
        to: newemail_address,
        subject: 'Your account has been updated',
        template: 'email-verify-new-email',
        templateData: {
          full_name: full_name||this.req.me.full_name,
          token: valuesToSet.emailProofToken
        }
      });
    }

  }


};
