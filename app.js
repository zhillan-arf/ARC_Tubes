const express = require("express")
var bodyParser = require('body-parser')
const cors = require("cors")
const routes = require('./routes')
const db = require('./models')
// const mysql = require("mysql")
require("dotenv").config()

const app = express()

const port = 3000

var corsOpt = {
    origin: "http://localhost:3000"
}

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors(corsOpt))
app.use(routes)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static("public"))
app.use(express.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    res.render("hello.ejs")
})

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})