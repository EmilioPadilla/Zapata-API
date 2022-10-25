/**
 * User.js
 *
 * A user who can log in to this application.
 */

 module.exports = {

    attributes: {
      id:{
        type: 'number',

          autoIncrement: true,
          example: '1'
        },
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      name:{
        type: 'string',
        required: false,
        unique: false,
        example: 'Mazda Qro'
      },
      direction:{
        type: 'string',
        required: false,
        unique: false,
        example: 'Psicometria 113'
      },
      state:{
        type: 'string',
        required: false,
        unique: false,
        example: 'Qro'
      },
      city:{
        type: 'string',
        required: false,
        unique: false,
        example: 'Qro'
      },
      users:{
        model:'user'
      }
    },
  };
  