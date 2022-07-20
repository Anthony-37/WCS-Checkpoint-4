const AbstractManager = require("./AbstractManager");

class QuantityManager extends AbstractManager {
  static table = "quantity";

  insert(quantity) {
    return this.connection.query(
      `insert into ${QuantityManager.table} (quantity) values (?)`,
      [quantity.quantity]
    );
  }

  update(quantity) {
    return this.connection.query(
      `update ${QuantityManager.table} set quantity = ? where id = ?`,
      [quantity.quantity, quantity.id]
    );
  }
}

module.exports = QuantityManager;
