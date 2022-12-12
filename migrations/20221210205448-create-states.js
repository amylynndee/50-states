'use strict';
// /** @type {import('sequelize-cli').Migration} */ - commented this out to see if this is causing issues
module.exports = {
  // async up(queryInterface, Sequelize) {
    up: async (queryInterface, Sequelize) => {        // reformatting this line of code, previous version is the line above
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      visited: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lon: {
        type: Sequelize.FLOAT
      },
      zoom: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  // async down(queryInterface, Sequelize) {
    down: async (queryInterface, Sequelize) => {         // reformatting this line of code, previous version is the line above
    await queryInterface.dropTable('States');
  }
};

// migrations are instructions for how to create a database table. - Lines 10-33 are used as properties in our code