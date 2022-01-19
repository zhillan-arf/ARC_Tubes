const express = require("express")
const mysql = require("mysql")
require("dotenv").config()

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    res.render("hello.ejs")
})

app.listen(3000)