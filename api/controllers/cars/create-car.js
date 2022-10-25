module.exports = {
    friendlyName: "Create car",
  
    description: "Insert car information.",
  
    
  
    inputs: {                      
          id_car_image:{
            type: 'number',
            required: true,
            unique: false,
            example: '1'
          },			
                      
          description:{
            type: 'string',
            required: false,
            unique: false,
            example: '10000'
          },

          insurance_period:{
            type: 'string',
            required: false,
            unique: false,
            example: '01/02/2020'
          },			
                      
          verification_validity:{
            type: 'string',
            required: false,
            unique: false,
            example: '01/02/2020'
          },			
                      
          circulation_validity:{
            type: 'string',
            required: false,
            unique: false,
            example: '01/02/2020'
          },					
                      
		
    },
  
    exits: {
      success: {
        description: "New car was created successfully.",
      },
  
      invalid: {
        responseType: "badCarRequest",
        description:
          "The provided car information are invalid.",
      },
  
      carAlreadyInUse: {
        statusCode: 409,
        description: "The provided car already exists.",
      },
    },
  
    fn: async function ({  id_car_image, description,insurance_period,verification_validity}) {
      
  
      // Build up data for the new user record and save it to the database.
      // (Also use `fetch` to retrieve the new ID so that we can use it below.)
      var newCarRecord = await Car.create(
        _.extend(
          {
            id_car_image,
            description,
            insurance_period,
            verification_validity,
            circulation_validity
            // tosAcceptedByIp: this.req.ip,
          }
          // sails.config.custom.verifyEmailAddresses
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
  