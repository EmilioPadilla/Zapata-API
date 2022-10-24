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
        example: 'administrador'
      },
      users:{
        model:'user'
      },
      id_permit:{
        collection:'permit',
        via:'id_role',
        through: 'rolehaspermit'
      }
    },
  };
  