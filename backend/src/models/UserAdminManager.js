const AbstractManager = require("./AbstractManager");

class UserAdminManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserAdminManager.table} (firstname, email) values (?, ?)`,
      [user.firstname, user.email]
    );
  }

  update(user, id) {
    return this.connection.query(
      `update ${UserAdminManager.table} set ? where id = ?`,
      [user, id]
    );
  }
}

module.exports = UserAdminManager;
