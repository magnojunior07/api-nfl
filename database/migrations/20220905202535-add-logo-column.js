module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn("Teams", "logo",{
        type: Sequelize.STRING
      })
  },

  async down (queryInterface, Sequelize) {
    
  }
};
