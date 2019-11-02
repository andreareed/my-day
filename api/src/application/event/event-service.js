const Event = require('./Event');
const knex = require('../../lib/knex');

module.exports = {
  async createEvent(payload, user_id) {
    return Event.query().insertAndFetch({ ...payload, user_id });
  },

  async getEvents(query) {
    console.log(query);
    return Event.query();
  },
};
