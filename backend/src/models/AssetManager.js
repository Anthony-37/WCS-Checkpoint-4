const AbstractManager = require("./AbstractManager");

class AssetManager extends AbstractManager {
  static table = "asset";

  insert(price) {
    return this.connection.query(
      `insert into ${AssetManager.table} (price) values (?)`,
      [price.price]
    );
  }

  update(price) {
    return this.connection.query(
      `update ${AssetManager.table} set price = ? where id = ?`,
      [price.price, price.id]
    );
  }
}

module.exports = AssetManager;
