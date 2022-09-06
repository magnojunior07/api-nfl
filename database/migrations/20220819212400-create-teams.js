module.exports = {
   up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Teams", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },

        super_bowls: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        division: {
          allowNull: false,
          type: DataTypes.STRING
        },
        conference: {
          allowNull: false,
          type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
    })
  },

   down: (queryInterface) => {
  return queryInterface.dropTable("Teams")
  }
};
