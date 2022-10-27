module.exports = {
  friendlyName: "Signup",

  description: "Sign up for a new user account.",

  extendedDescription: `This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,

  inputs: {
    email_address: {
      required: true,
      type: "string",
      isEmail: true,
      description: "The email address for the new account, e.g. m@example.com.",
      extendedDescription: "Must be a valid email address.",
    },
    password: {
      required: true,
      type: "string",
      maxLength: 200,
      example: "passwordlol",
      description: "The unencrypted password to use for the new account.",
    },
    full_name: {
      required: true,
      type: "string",
      example: "Frida Kahlo de Rivera",
      description: "The user's full name.",
    },
    telephone: {
      required: true,
      type: "string",
      example: "5253425243",
      description: "The user's telephone.",
    },
    id_office: {
      type: "number",
    },
    id_role: {
      type: "number",
    },
  },

  exits: {
    success: {
      description: "New user account was created successfully.",
    },

    invalid: {
      responseType: "badRequest",
      description:
        "The provided full_name, password and/or email address are invalid.",
      extendedDescription:
        "If this request was sent from a graphical user interface, the request " +
        "parameters should have been validated/coerced _before_ they were sent.",
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: "The provided email address is already in use.",
    },
  },


  fn: async function ({ email_address, password, full_name, telephone }) {
    var newemail_address = email_address.toLowerCase();
    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newUserRecord = await User.create(
      _.extend(
        {
          full_name,
          email_address: newemail_address,
          password: await sails.helpers.passwords.hashPassword(password),
          telephone,
          id_office,
          id_role
          // tosAcceptedByIp: this.req.ip,
        }
        // sails.config.custom.verifyemail_addresses
        //   ? {
        //       emailProofToken: await sails.helpers.strings.random(
        //         "url-friendly"
        //       ),
        //       emailProofTokenExpiresAt:
        //         Date.now() + sails.config.custom.emailProofTokenTTL,
        //       emailStatus: "unconfirmed",
        //     }
        //   : {}
      )
    )
      // .intercept("E_UNIQUE", "emailAlreadyInUse")
      .intercept({ name: "UsageError" }, "invalid")
      .fetch();

    // Store the user's new id in their session.
    this.req.session.userId = newUserRecord.id;
  },
};
