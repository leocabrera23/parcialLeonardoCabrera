'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrdersDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.DECIMAL
      },
      subtotal: {
        type: Sequelize.DECIMAL
      },
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      orders_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrdersDetails');
  }
};