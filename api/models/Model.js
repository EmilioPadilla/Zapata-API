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
        required: false,
        unique: true,
        example: 'Mazda Qro'
      },			
			
      year:{
        type: 'string',
        required: false,
        unique: false,
        example: '02/02/2020'
      },			
			
      id_brand:{
        model: 'brand'
      },			
			
    },
  };
  