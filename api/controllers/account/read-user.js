const user = require("../../models/user");

module.exports = {


  friendlyName: 'Read User',


  description: 'Read a user info.',


  extendedDescription:
``,

  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged out.'
    },



  },


  fn: async function () {
    const info = await user.find(this.req.session.userId)
    
    return info;

  }


};
