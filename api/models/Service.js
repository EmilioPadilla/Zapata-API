/**
 * User.js
 *
 * A user who can log in to this application.
 */

const CarHasService = require("./CarHasService");

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
      

      id_type:{
        collection:'type',
        via:'id_service',
        through:'servicehastype'
      },

      cars:{
        collection:'car',
        via:'id_service',
        through: 'carhasservice'
      }
    },
  };
  