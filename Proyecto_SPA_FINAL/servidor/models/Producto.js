const mongoose = require("mongoose");

const  ProductoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    documento: {
        type: Number,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    usuario: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Producto", ProductoSchema);