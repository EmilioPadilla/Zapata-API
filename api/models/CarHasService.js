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
      id_car:{
        model: 'car',
        //required:'true'
      },			
			
      id_service:{
        model: 'service',
        //required: 'true'
      },		
			
    },
  };
  
