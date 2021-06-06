'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 'd649bb89-0e21-4fdc-ad4e-e19f78c59f07',
        email: 'admin@teamone.com',
        password: bcrypt.hashSync('admin', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

