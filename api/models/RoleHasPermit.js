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
      id_role:{
        model: 'role'
      },
      id_permit:{
        model: 'permit'
      },
      creation_date:{
        type: 'number',
        autoCreatedAt: true,
      },
      update_date:{
        type: 'number',
        autoUpdatedAt: true, 
      },
    },
  };
  