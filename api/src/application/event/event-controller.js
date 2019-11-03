const moment = require('moment');
const service = require('../event/event-service');

const getUserId = request => request.auth.credentials.user.id;

module.exports = {
  async postEvent(request) {
    const { payload } = request;

    if (!payload.start_time) {
      payload.start_time = moment();
    }

    return service.createEvent(payload, getUserId(request));
  },

  async getEvents(request) {
    const { start_time, end_time } = request.query;
    return service.getEvents(getUserId(request), start_time, end_time);
  },
};
