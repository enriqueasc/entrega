const mongoose = require('mongoose');

const medicosSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      cedula: {
          type: Number,
          required: true,
      },
      especialidad: {
          type: String,
          required: true,
      },
      telefono: {
        type: Number,
        required: true,
    },
    }
  );
  

module.exports = mongoose.model('Medicos', medicosSchema);