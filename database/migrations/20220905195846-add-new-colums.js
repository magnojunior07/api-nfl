module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn("Teams", "conference",{
          type: Sequelize.STRING(3),
      })
  },

  async down (queryInterface, Sequelize) {
    
  }
};
