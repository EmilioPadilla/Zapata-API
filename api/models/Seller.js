/**
 * User.js
 *
 * A user who can log in to this application.
 */

const Employee = require("./Employee");

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
      id_seller:{
        model:'employee'
      },
      clients:{
        model:'client'
      }
    },
  };
  