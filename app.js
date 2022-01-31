require('dotenv').config() // load all environment variables first
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const db = require('./models')
const passport = require('passport')

const app = express()
const port = 3000

const corsOpt = {
    origin: "http://localhost:3000"
}

require('./passport')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())
app.use(require('express-session')({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET_KEY
}))

app.use(cors(corsOpt))
app.use(routes)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('landing_page.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.get('/todo', (req, res) => {
    res.render('todo.ejs')
})

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})