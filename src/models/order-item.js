"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_Item.init(
    {
      order_detail_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      pay: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order_items",
    }
  );
  return Order_Item;
};
