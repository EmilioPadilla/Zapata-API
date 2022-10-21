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
    date_of_birth:{
      type: 'number',
      required: false,
      unique: true,
      autoIncrement: true,
      example: '1'
    },
    
    direction:{
      type: 'string',
      required: false,
      unique: false,
      example: 'Psicometria 113,colonia tencnologico'
    },			
    
    license_validity:{
      type: 'string',
      required: false,
      unique: false,
      example: 'Mazda Qro'
    },			
    
    id_seller:{
      model:'seller'
    },			
    
    id_user:{
      model:'user'
    },			
    
  },
};

