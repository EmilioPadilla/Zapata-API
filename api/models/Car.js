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
			
      start_kilometers:{
        type: 'number',
        required: true,
        unique: false,
        example: '10000'
      },			
                  
      actual_kilometers:{
        type: 'number',
        required: false,
        unique: false,
        example: '10000'
      },			
                  
      radius_geofence:{
        type: 'number',
        required: false,
        unique: false,
        example: '10'
      },			
                  
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
                  
      max_velocity:{
        type: 'number',
        required: false,
        unique: false,
        example: '10'
      },		
                  
      id_gps:{
        model: 'gps'
      },			
                  
      id_client:{
        model:'client'
      },		
                  
    },
  };
  