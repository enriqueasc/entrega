const express = require('express');
const router = express.Router();
const medicosSchema = require('../models/medicos');
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth();

router.post('/medicos', checkJwt, function(req, res) {
    const medicos = medicosSchema(req.body);

    medicos.save().then((medicos) => {
        res.json(medicos);
    }).catch((error) => {
        console.log('Error al guardar el medicos', error);
    });

});

router.get('/medicos', checkJwt, function(req, res) {
    
    medicosSchema.find().then((medicos) => {
        res.json(medicos);
    }).catch((error) => {
        console.log('Error al obtener los medicos', error);
    });
  });

router.get('/medicos/:id', checkJwt, function(req, res) {

    medicosSchema.findById(req.params.id).then((medicos) => {
        res.json(medicos);
    }).catch((error) => {
        console.log('Error al obtener el medicos', error);
    });

});

router.put('/medicos/:id', checkJwt, function(req, res) {
    const { id } = req.params;
    let { nombre, descripcion, dosisRec, efectosSec, contraindicaciones, fechaCaduc } = req.body;

    medicosSchema.updateOne({ _id: id }, 
        { $set: { nombre, descripcion, dosisRec, efectosSec, contraindicaciones, fechaCaduc } })
        .then((medicos) => {
            res.json(medicos);
        }).catch((error) => {
            console.log('Error al actualizar el medicos', error);
        });

});

router.delete('/medicos/:id', checkJwt, function(req, res) {

    medicosSchema.findByIdAndRemove(req.params.id).then((medicos) => {
        res.json(medicos);
    }).catch((error) => {
        console.log('Error al eliminar el medicos', error);
    });

});

  module.exports = router;


