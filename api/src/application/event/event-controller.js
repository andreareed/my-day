const moment = require('moment');
const service = require('../event/event-service');

module.exports = {
  async postEvent(request) {
    const {
      payload,
      auth: {
        credentials: { user },
      },
    } = request;

    if (!payload.start_time) {
      payload.start_time = moment();
    }

    return service.createEvent(payload, user.id);
  },
};
