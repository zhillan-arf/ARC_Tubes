const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(255)
        },
        username: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(255)
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(255)
        }
    })
}
