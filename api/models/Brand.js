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
      name:{
        type: 'string',
        required: true,
        unique: true,
        example: 'Mazda'
      },
      
    },
  };
  