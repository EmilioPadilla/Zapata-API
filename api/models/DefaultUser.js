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
    full_name: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der McHenst'
    },

    email_address: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },

    telephone: {
      type: 'string',
      required: false,
      unique: false,
      maxLength: 200,
      example: '7721323273'
    },

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },

    id_office: {
      collection:'office',
      via:'users'
    },

    id_role: {
      collection:'role',
      via:'users'
    },
    clients:{
      model:'client'
    },
    employees:{
      model:'employee'
    }
  },
};
