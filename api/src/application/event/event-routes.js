const Joi = require('joi');

const Event = require('./Event');
const controller = require('./event-controller');

const UserRoutes = {
  name: 'Event Routes',
  register: async (server, options) => {
    server.route([
      {
        method: 'POST',
        path: '/events',
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
      {
        method: 'GET',
        path: '/events',
        handler: controller.getEvents,
        config: {
          auth: {
            strategies: ['jwt'],
          },
          validate: {
            query: {
              start_time: Joi.date(),
              end_time: Joi.date(),
            },
          },
        },
      },
    ]);
  },
};

module.exports = UserRoutes;
