"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const role_data = [
      {
        id: 1,
        name: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "PM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Roles", role_data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
