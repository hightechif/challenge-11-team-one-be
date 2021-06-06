'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => {
      return queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};