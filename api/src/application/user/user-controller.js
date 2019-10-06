const Boom = require('boom');

const service = require('../user/user-service');
const authService = require('../auth/auth-service');

module.exports = {
  async registerUser(request) {
    const { payload } = request;
    delete payload.confirmPassword;

    const emailExists = await service.findByEmail(payload.email);

    if (emailExists) {
      throw Boom.conflict('This email address is already in use');
    }

    const user = await service.create(payload);
    delete user.password;

    user.token = await authService.signJWT(user);
    return user;
  },
};
