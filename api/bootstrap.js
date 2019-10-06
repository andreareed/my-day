const validate = require('./src/application/auth/verifyJWT');
const { handleTokenError } = require('./src/application/auth/auth-service');
const config = require('./config');

const bootstrap = {
  name: 'Docker Template API',
  version: '0.1.0',
  register: async (server, options) => {
    // Register JWT Validation Function
    server.auth.strategy('jwt', 'jwt', {
      key: config.auth.jwtSecret,
      validate,
      verifyOptions: { algorithms: ['HS256'] },
      errorFunc: handleTokenError,
      cookieKey: 'id_token',
    });

    // Add health check route
    server.route({
      method: 'GET',
      path: '/health-check',
      config: {
        handler: () => ':)',
      },
    });

    // rewrite requests from /api/* to /*
    server.ext('onRequest', (request, h) => {
      // allow for the /api prefix
      request.setUrl(request.url.pathname.replace(/\/api\//, '/'));
      return h.continue;
    });
  },
};

module.exports = bootstrap;
