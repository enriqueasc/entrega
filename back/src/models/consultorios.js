const e = require('express');
const mongoose = require('mongoose');

//crear el esquema
const consultoriosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    piso: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Consultorios', consultoriosSchema);