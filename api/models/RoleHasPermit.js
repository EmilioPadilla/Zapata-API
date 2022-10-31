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
      id_role:{
        model: 'userrole',
        //required: 'true'
      },
      id_permit:{
        model: 'permit',
        //required: 'true'
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
  