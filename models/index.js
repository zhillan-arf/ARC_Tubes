const dbConfig = require('../db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./user.model')(sequelize)
db.todos = require('./todos.model')(sequelize)

module.exports = db
