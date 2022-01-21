const Todos = require('../models').todos

/**
 * Untuk mendapatkan semua todo semua todo
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getAll = (req, res) => {

    Todos.findAll()
        .then(data => {
            return res.status(200).send({
                data: data
            })
        })
        .catch(err => {
            return res.status(500).send({
                msg: err || "Gagal mencari todo"
            })
        })
}

/**
 * Delete todo berdasarkan ID
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteTodo = (req, res) => {
    const id = req.body.id
    const query = { id: id }
    Todos.destroy({ where: query })
        .then(data => {
            res.status(200).send({
                msg: `todo dengan id ${id} berhasil dihapus`
            })
        })
        .catch(err => {
            return res.status(500).send({
                msg: err || `todo dengan id ${id} gagal dihapus`
            })
        })
}

/**
 * Menambahkan todo dengan nama todo (hal yang ingin dilakukan) ada di body request
 *
 * @param req
 * @param res
 */
exports.addTodo = (req, res) => {
    const name = req.body.name

    console.log("nama: " + name)
    Todos.create({ name })
        .then(data => {
            return res.status(200).send({
                data: data,
                mg: this.name,
                msg: "Berhasil menambahkan todo"
            })
        })
        .catch(err => {
            return res.status(500).send({
                msg: err || "Gagal menambahkan todo"
            })
        })
}

/**
 * Update todo, berdasarkan ID
 * note: Hanya akan diimplementasikan apabila front end ata fitur update todo
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.update = async(req, res) => {

}