const Boom = require('boom');
const Inert = require('inert');
const JWTAuth = require('hapi-auth-jwt2');
const objection = require('objection');
const objectionSoftDelete = require('objection-softdelete');
const fs = require('fs');
const Bootstrap = require('./bootstrap');
const knex = require('./src/lib/knex');
const config = require('./config');

// Register Model knex instance
objection.Model.knex(knex);
objectionSoftDelete.register(objection, {
  deleteAttr: 'deleted_at',
});

// Route Plugins
const authRoutes = require('./src/application/auth/auth-routes');
const userRoutes = require('./src/application/user/user-routes');

const server = {
  routes: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['api-version'],
    },
    validate: {
      options: { abortEarly: false },
      failAction: (request, h, error) => {
        if (!error.data || !error.data.details) {
          if (error.isBoom) {
            return error;
          }

          return Boom.badImplementation(error);
        }
        error.output.payload.validationErrors = error.data.details.map(failure => ({
          message: failure.message,
          type: failure.type,
          key: failure.path,
        }));
        return error;
      },
    },
  },
  port: 9000,
};

if (config.env === 'development') {
  server.tls = {
    key: fs.readFileSync('dev.key'),
    cert: fs.readFileSync('dev.crt'),
  };
}

module.exports = {
  server,
  register: {
    plugins: [
      JWTAuth,
      Inert,
      Bootstrap,
      authRoutes,
      userRoutes,
      {
        plugin: require('hapi-rate-limit'),
        options: {
          userLimit: 300,
          userCache: {
            segment: 'rate-limit-user',
            expiresIn: 60000,
          },
          pathLimit: false,
          headers: process.env.NODE_ENV === 'development',
        },
      },
    ],
  },
};
