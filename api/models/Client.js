/**
 * Client.js
 *
 * A client has a car from Zapata.
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
      type: "number",
      required: false,
      unique: true,
      autoIncrement: true,
      example: 1,
    },

    id_user: {
      type: "number",
      required: false,
      unique: true,
      example: 1,
    },

    id_vendor: {
      type: "number",
      required: true,
      description: "Full representation of the user's name.",
      example: 1,
    },

    birthday: {
      type: "string",
      columnType: "date",
      required: true,
      unique: true,
      example: "DD/MM/YYYY",
    },

    addresss: {
      type: "string",
      required: false,
      unique: true,
      maxLength: 300,
      example:
        "Privada de Camino Real #114 Col. Los Girasoles c.p. 76159 Queretaro, Queretaro",
    },

    license_expiration: {
      type: "string",
      columnType: "date",
      required: true,
      description:
        "Securely hashed representation of the user's login password.",
      protect: true,
      example: "DD/MM/YYYY",
    },
  },
};
