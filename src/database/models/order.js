'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.user)
      Order.belongsTo(models.state)
      Order.belongsTo(models.payment)
      Order.hasMany(models.orderdetails,{
        foreignKey:'order_id',
        as:'orderdetails'
      })
    //hasOne
      Order.hasOne(Shipping,{
        foreignKey:'shipping_id',
        as:'shippings'
      });
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    users_addresses_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};