const config = require('../../config');

const options = {
  debug: process.env.DEBUG,
  client: 'pg',
  connection: config.db.connection,
};

module.exports = require('knex')(options);
