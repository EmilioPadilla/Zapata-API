/**
 * User.js
 *
 * A user who can log in to this application.
 */

 module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      id:{
        type: 'number',
        required: false,
        unique: true,
        autoIncrement: true,
        example: '1'
      },
      nombre:{
        type: 'string',
        required: false,
        unique: true,
        example: 'Rotación de balatas'
      },
    },
  };
  