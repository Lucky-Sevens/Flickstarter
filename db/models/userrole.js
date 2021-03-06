const db = require('../');

const UserRole = db.Model.extend({
  tableName: 'users_roles',
  user: function() {
    return this.belongsTo('Profile', 'user_id');
  },
  role: function() {
    return this.belongsTo('Role');
  }
});

module.exports = db.model('UserRole', UserRole);
