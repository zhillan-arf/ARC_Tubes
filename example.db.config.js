module.exports = {
    HOST: "localhost",
    USER: "user",
    PASSWORD: "password",
    DB: "databasename",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
