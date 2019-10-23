const Joi = require('joi');

const Event = require('./Event');
const controller = require('./event-controller');

const UserRoutes = {
  name: 'Event Routes',
  register: async (server, options) => {
    server.route([
      {
        method: 'POST',
        path: '/event',
        handler: controller.postEvent,
        config: {
          auth: {
            strategies: ['jwt'],
          },
          validate: {
            payload: {
              type: Joi.string().required(),
            },
          },
        },
      },
    ]);
  },
};

module.exports = UserRoutes;
