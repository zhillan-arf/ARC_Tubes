const router = require('express').Router()
const {
    getAll,
    deleteTodo,
    addTodo,
    update
} = require('../controllers')

router.get('/api/getAll', getAll)
router.delete('/api/delete', deleteTodo)
router.post('/api/addTodo', addTodo)
router.put('/api/update', update)

module.exports = router
