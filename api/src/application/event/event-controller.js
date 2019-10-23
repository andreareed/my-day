const service = require('../event/event-service');

module.exports = {
  async postEvent(request) {
    const {
      payload,
      auth: {
        credentials: { user },
      },
    } = request;

    return service.createEvent(payload, user.id);
  },
};
