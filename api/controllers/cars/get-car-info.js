module.exports = {
    friendlyName: 'Get Car Info',
  
    description: 'Obtain car information.',
  
    extendedDescription: `Look for the car information through db.`,
  
    inputs: {
      id: {
        description: 'The car id".',
        type: 'number',
        required: true,
      },
    },
  
    exits: {
      success: {
        description: 'The info has been recived.',
      },
  
      badCombo: {
        description: `The provided id does not
        match any car in the database.`,
        responseType: '404: not found',
      },
    },
  
    fn: async function ({ id }) {
      // Look up by the email address.
      // (note that we lowercase it to ensure the lookup is always case-insensitive,
      // regardless of which database we're using)
      const carRecord = await Car.findOne(id);
  
      // If there was no matching user, respond thru the "badCombo" exit.
      if (!carRecord) {
        throw 'badCombo';
      }
  
      // In case there was an existing session (e.g. if we allow users to go to the login page
      // when they're already logged in), broadcast a message that we can display in other open tabs.
      return carRecord;
    },
  };
  