const Event = require('./Event');

module.exports = {
  async createEvent(payload, user_id) {
    return Event.query().insertAndFetch({ ...payload, user_id });
  },

  async getEvents(user_id, start_time, end_time) {
    let query = Event.query()
      .where({ user_id })
      .orderBy('start_time', 'ASC');

    if (start_time) {
      query = query.andWhere('start_time', '>=', start_time);
    }

    if (end_time) {
      query = query.andWhere('end_time', '<=', end_time);
    }

    return query;
  },
};
