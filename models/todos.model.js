const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
    const Todos = sequelize.define('todos', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nama_tugas: {
            type: DataTypes.STRING(255)
        },
        nama_matkul: {
            type: DataTypes.STRING(255)
        },
        due_date: {
            type: 'TIMESTAMP'
        }
    })
    return Todos
}
