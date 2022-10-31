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
    id_user:{
      collection:'defaultuser',
      via:'clients'
    },	

    date_of_birth:{
      type: 'number',
      required: true,
      unique: true,
      autoIncrement: true,
      example: '1'
    },

    address:{
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
      collection: 'seller',
      via: 'clients'
    },					

    cars:{
      model:'car'
    }
  },
};

