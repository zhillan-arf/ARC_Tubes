const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportJWT = require('passport-jwt')
const bcrypt = require('bcrypt')
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const User = require('./models').user

passport.use(new LocalStrategy({
        usernameField: 'username', // nama field untuk ngisi username <input name = username >
        passportField: 'passport' // nama field untuk mengisi password
    },
    (username, password, callback) => {
        return User.findOne({
            where: {
                username
            }
        })
            .then(user => {
                if(!user) {
                    return callback(null, false, {message: 'Incorrect Username or Password'})
                }
                bcrypt.compare(password, user.password)
                    .then(ret => {
                        if(ret) {
                            return callback(null, user)
                        }
                        return callback(null, false, {message: 'Incorrect Username or Password'})
                    })
                    .catch(err => {
                        return callback(null, false, {message: 'Incorrect Username or Password'})
                    })
            })
            .catch(err => {
                return callback(null, false, {message: 'Incorrect Username or Password'})
            })
    }
))

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    (jwtPayload, callback) => {

        return User.findByPk(jwtPayload.id)
            .then(user => {
                return callback(null, user)
            })
            .catch(err => {
                return callback(Err)
            })
    }
))
