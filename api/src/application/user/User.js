const { Model } = require('objection');
const uuidv4 = require('uuid/v4');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {};
  }

  $beforeInsert() {
    this.id = uuidv4();
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = User;
