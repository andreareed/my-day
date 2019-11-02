const Joi = require('joi');

const controller = require('./user-controller');

const UserRoutes = {
  name: 'User Routes',
  register: async (server, options) => {
    server.route([
      {
        method: 'POST',
        path: '/users',
        handler: controller.registerUser,
        config: {
          validate: {
            payload: {
              first_name: Joi.string().required(),
              last_name: Joi.string().required(),
              email: Joi.string()
                .email()
                .required(),
              password: Joi.string()
                .min(6)
                .required(),
              confirmPassword: Joi.any()
                .valid(Joi.ref('password'))
                .required(),
            },
          },
        },
      },
    ]);
  },
};

module.exports = UserRoutes;
