module.exports = {
  create: function (req, res) {
    sails.log.debug(req.allParams());
    sails.log.debug(req.allParams());
    Device.create(req.allParams())
      .then((dispositivos) => {
        return res.send({
          success: true,
          message: 'Record created successfully',
        });
      })
      .catch((err) => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to create record',
        });
      });
  }
};