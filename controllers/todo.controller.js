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
            if(data === 0) {
                return res.status(500).send({
                    msg: `todo dengan id ${id} tidak ada di database`
                })
            }
            else {
                return res.status(200).send({
                    msg: `todo dengan id ${id} berhasil dihapus`
                })
            }

        })
        .catch(err => {
            return res.status(500).send({
                msg: err || `todo dengan id ${id} gagal dihapus`
            })
        })
}

/**
 * Menambahkan todo dengan nama todo (hal yang ingin dilakukan) ada di body request
 * Gunakan MySQL Date Time untuk due_date, contoh: 2022-06-29 17:54:04
 * @param req
 * @param res
 */
exports.addTodo = (req, res) => {
    const nama_tugas = req.body.nama_tugas
    const nama_matkul = req.body.nama_matkul
    const due_date = req.body.due_date

    Todos.create({ nama_tugas, nama_matkul, due_date })
        .then(data => {

            return res.status(200).send({
                data: data,
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
 * @param _
 * @param __
 * @returns {Promise<void>}
 */
exports.update = async(_, __) => {

}

// todo implement authorization dengan JWT

