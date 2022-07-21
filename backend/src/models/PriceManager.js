const AbstractManager = require("./AbstractManager");

class PriceManager extends AbstractManager {
  static table = "price";

  insert(price) {
    return this.connection.query(
      `insert into ${PriceManager.table} (price) values (?)`,
      [price.price]
    );
  }

  update(price) {
    return this.connection.query(
      `update ${PriceManager.table} set price = ? where id = ?`,
      [price.price, price.id]
    );
  }
}

module.exports = PriceManager;
