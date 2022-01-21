const router = require('express').Router()
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

router.get('/api/getAll', getAll)
router.delete('/api/delete', deleteTodo)
router.post('/api/addTodo', addTodo)
router.put('/api/update', update)

router.post('/api/register', register)
router.post('/api/login', login)

module.exports = router
