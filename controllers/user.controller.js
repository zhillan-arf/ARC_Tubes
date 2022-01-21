const User = require('../models').user

exports.register = async (req, res) => {
    const name = req.body.name
    const username = req.body.username
    const password = req.body.password
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
        return res.status(200).send({
            msg: "User created successfully"
        })
    } catch(err) {
        return res.status(500).send({
            msg: "Error while insert data"
        })
    }
}

exports.login = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.findOne({
        where: {
            username,
            password
        }
    }).then(data => {
        // todo implement authentication dengan benar
        return res.status(200).send({
            msg: `User ${username} berhasil login`
        })
    }).catch(err => {
        return res.status(500).send({
            msg: err || "Internal server error"
        })
    })
}

