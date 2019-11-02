const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const config = require('../../../config');

module.exports = {
  comparePasswords(inputPassword, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(inputPassword, hash, (err, res) => {
        if (err) {
          reject(err);
        } else if (res) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },

  signJWT(user) {
    if (!user) {
      throw new Error('signJWT: no user provided');
    }

    const payload = {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    };

    return JWT.sign(payload, config.auth.jwtSecret, {
      algorithm: 'HS256',
      expiresIn: '14d',
    });
  },

  handleTokenError(err) {
    return err;
  },
};
