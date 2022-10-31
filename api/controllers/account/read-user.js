const user = require("../../models/DefaultUser");

module.exports = {


  friendlyName: 'Read User',


  description: 'Read a user info.',


  extendedDescription:
``,

  exits: {

    success: {
      description: 'User Json is displayed'
    },



  },


  fn: async function () {
    const info = await DefaultUser.find(this.req.session.userId)
    
    return info;

  }


};
