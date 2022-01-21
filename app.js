require("dotenv").config() // load all environment variables first
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes")
const db = require("./models")

const app = express()
const port = 3000

const corsOpt = {
    origin: "http://localhost:3000"
}


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(cors(corsOpt))
app.use(routes)


app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("hello.ejs")
})

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
})


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})