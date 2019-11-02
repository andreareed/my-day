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
        handler: request => controller.getEvents,
        config: {
          auth: {
            strategies: ['jwt'],
          },
          validate: {
            query: {
              userIds: Joi.string().uuid(),
              dates: Joi.date(),
              page: Joi.number(),
              page_size: Joi.number(),
            },
          },
        },
      },
    ]);
  },
};

module.exports = UserRoutes;
