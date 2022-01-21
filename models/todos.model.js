const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
    const Todos = sequelize.define('todos', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(255)
        },
    })
    return Todos
}
