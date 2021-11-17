//quinto: importar mongoose y schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//sexto: crear base de datos, revisar los tipos de datos
const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//septimo: exportar

module.exports = mongoose.model('user', User)
