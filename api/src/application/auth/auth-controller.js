const JWT = require('jsonwebtoken');
const uuid = require('uuid');
const Boom = require('boom');
const bcrypt = require('bcrypt');
const service = require('./auth-service');
const userService = require('../user/user-service');
const config = require('../../../config');

module.exports = {
  async getToken(request) {
    const { email, password } = request.payload;
    const invalidUserError = Boom.badRequest('Incorrect email address or password');
    const user = await userService.findByEmail(email);

    if (!user) {
      return invalidUserError;
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return invalidUserError;
    }

    user.token = await service.signJWT(user);
    delete user.password;

    return user;
  },

  async verifyToken(request) {
    const { token } = request.payload;
    const verified = JWT.verify(token, config.auth.jwtSecret);

    if (verified) {
      const user = await userService.findById(verified.id);
      delete user.password;
      user.token = token;
      return user;
    }

    throw Boom.unauthorized('Unable to verify user');
  },
};
