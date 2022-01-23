const jwt = require('jsonwebtoken')
const passport = require('passport')

const User = require('../models').user

exports.register = async (req, res) => {
    const name = req.body.name
    const username = req.body.username
    const password = req.body.password

    if(!name || !username || !password) {
        return res.status(400).send({
            msg: "Please fill all data"
        })
    }

    const user = {
        name,
        username,
        password
    }
    try {
        const result = await User.findOne({
            where: { username }
        })
        if(result !== null) {
            return res.status(500).send({
                msg: "Username already exist"
            })
        }
        User.create(user)
        return res.redirect('/login')
    } catch(err) {
        return res.status(500).send({
            msg: "Error while insert data"
        })
    }
}

exports.login = (req, res) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {

        if(err || !user) {
            return res.status(400).json({
                msg: info.message || "Something is wrong",
            })
        }
        req.login(user, {session: false}, (err) => {
            if(err) {
                return res.send(err)
            }

            const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {expiresIn: '20m'})
            res.cookie('token', token, {httpOnly: true})
            res.redirect('/tugas')
        })
    })(req, res)

}

