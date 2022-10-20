/**
 * DevicesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Device = require('../../models/Device');

module.exports = {
  get: function (req, res) {
    Device.find()
      .then((Devices) => {
        if (!Devices || Devices.lenght === 0) {
          return res.send({
            success: false,
            message: 'No records found',
          });
        }

        return res.send({
          success: true,
          message: 'Records fetched',
          data: Devices,
        });
      })
      .catch((err) => {
        sails.log.debug(err);

        return res.send({
          success: false,
          message: 'Unable to getch records',
        });
      });
  },
};
