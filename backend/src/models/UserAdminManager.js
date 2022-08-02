const AbstractManager = require("./AbstractManager");

class UserAdminManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserAdminManager.table} (firstname, email, hash_password) values (?, ?, ?)`,
      [user.firstname, user.email, user.hash_password]
    );
  }

  update(user, id) {
    return this.connection.query(
      `update ${UserAdminManager.table} set ? where id = ?`,
      [user, id]
    );
  }

  findByUserEmail(email) {
    return this.connection
      .query(`select * from  ${this.table} where email = ?`, [email])
      .then((result) => result[0]);
  }
}

module.exports = UserAdminManager;
