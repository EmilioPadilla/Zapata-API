/**
 * Dispositivos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "number",
      required: false,
      unique: true,
      autoIncrement: true,
      example: 1,
    },
    Latitud: { type: "string", required: true },
    Longitud: { type: "string", required: true },
    Bateria: { type: "number", required: true },
    FechaDispositivo: { type: "string" },
    Altitud: { type: "number" },
    Velocidad: { type: "number", required: true },
    Orientacion: { type: "number", required: true },
    NivelGsm: { type: "number" },
    ErrorMtsGps: { type: "number" },
    Alias: { type: "string", required: true },
  },
};
