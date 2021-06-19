'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrdersDetails.belongsTo(models.product)
      OrdersDetails.belongsToMany(models.order,{
        as: 'orders',
       through: 'order_id',
      }) 
    }
  };
  OrdersDetails.init({
    quantity: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    products_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdersDetails',
  });
  return OrdersDetails;
};