'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Vitorias', [{
       playerOne: 0,
       playerTwo: 0,
       createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Vitorias', null, {});
     
  }
};
