const AbstractManager = require("./AbstractManager");

class ProfilRoyalFamilyManager extends AbstractManager {
  static table = "profil_royal_family";

  insert(ProfilRoyalFamily) {
    return this.connection.query(
      `insert into ${ProfilRoyalFamily.table} (avatar, picture, status, firstname, lastname, description) values (? , ? , ? , ? , ? , ?)`,
      [ProfilRoyalFamily]
    );
  }

  update(ProfilRoyalFamily) {
    return this.connection.query(
      `update ${ProfilRoyalFamily.table} set quantity = ? where id = ?`,
      [ProfilRoyalFamily, ProfilRoyalFamily.id]
    );
  }
}

module.exports = ProfilRoyalFamilyManager;
