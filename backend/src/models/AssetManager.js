const AbstractManager = require("./AbstractManager");

class AssetManager extends AbstractManager {
  static table = "asset";

  insert(asset) {
    return this.connection.query(
      `insert into ${AssetManager.table} (name, price_id, quantity_id) values (? , ? , ?)`,
      [asset.name, asset.price_id, asset.quantity_id]
    );
  }

  update(asset) {
    return this.connection.query(
      `update ${AssetManager.table} set ? where id = ?`,
      [asset, asset.id]
    );
  }

  findAllJoin() {
    return this.connection.query(
      `select a.*, p.price, q.quantity from ${AssetManager.table} a
      join price p on p.id=a.price_id
      join quantity q on q.id=a.quantity_id`
    );
  }
}

module.exports = AssetManager;
