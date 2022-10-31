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

      name:{
        type: 'string',
        required: true,
        unique: true,
        example: 'Editar usuario'
      },
      description:{
        type: 'string',
        required: true,
        example: 'Se le otroga al usuario el permiso de editar usuario'
      },
      id_role:{
        collection:'userrole',
        via:'id_permit',
        through: 'rolehaspermit'
      }
    },
  };
  