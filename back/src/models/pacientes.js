const e = require('express');
const mongoose = require('mongoose');

//crear el esquema
const pacientesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Pacientes', pacientesSchema);