const router = require('express').Router()
const passport = require('passport')
const {
    getAll,
    deleteTodo,
    addTodo,
    update,
} = require('../controllers/todo.controller')
const {
    register,
    login
} = require('../controllers/user.controller')
require('../passport')

// user must be logged in first before using the api
router.get('/api/getAll', passport.authenticate('jwt', {session: false}), getAll)
router.delete('/api/delete', passport.authenticate('jwt', {session: false}), deleteTodo)
router.post('/api/addTodo', passport.authenticate('jwt', {session: false}), addTodo)
router.put('/api/update', passport.authenticate('jwt', {session: false}), update)

router.post('/api/register', register)
router.post('/api/login', login)

module.exports = router
