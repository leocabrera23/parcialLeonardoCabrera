'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shippings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Shippings');
  }
};