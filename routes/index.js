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
    login,
    test_login
} = require('../controllers/user.controller')
require('../passport')

// user must be logged in first before using the api
router.get('/api/getAll', getAll)
router.delete('/api/delete', deleteTodo)
router.post('/api/addTodo', addTodo)
router.put('/api/update', update)

router.post('/register', register)
router.post('/login', login)
router.post('/test_login', test_login)

module.exports = router
