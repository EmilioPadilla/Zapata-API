const user = require("../../models/user");

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
    const info = await User.find(this.req.session.userId)
    
    return info;

  }


};
