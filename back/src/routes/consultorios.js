const express = require('express');
const router = express.Router();
const consultoriosSchema = require('../models/consultorios');
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth();

// obtener todos los pacientes
router.get('/consultorio', checkJwt, function(req, res) {
    
    consultoriosSchema.find().then((consultorios) => {
        res.json(consultorios);
    }).catch((error) => {
        console.log('Error al obtener los pacientes', error);
    });                         

  });



//crear un nuevo consultorio
router.post('/consultorio', checkJwt, function(req, res) {
    const consultorio = consultoriosSchema(req.body);

    consultorio.save().then((consultorio) => {
        res.json(consultorio);
    }).catch((error) => {
        console.log('Error al guardar el paciente', error);
    });

});



  module.exports = router;


