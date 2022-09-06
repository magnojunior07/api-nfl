module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        name: DataTypes.STRING,
        super_bowls: DataTypes.INTEGER,
        division: DataTypes.STRING,
        conference: DataTypes.STRING(3),
        logo: DataTypes.STRING
    })

    return Team
}