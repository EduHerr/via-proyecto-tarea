const express = require('express');
const router = express.Router();
const { Response } = require('../../../libs/utils/response');
const { signUp, signIn } = require('../../controllers/auth.controller');

router.get('/signIn', (req, res) => {
    const { nombre, contrasenia } = req.query;
    signIn(nombre, contrasenia)
    .then(result => {
        res.header('authorization', result)
        res.send(new Response(200, {token: result}, null)) 
    })
    .catch(e => {res.send(new Response(500, null, e.message))})
})

router.post('/signUp', (req, res) => {
    signUp(req.body)
    .then(result => { res.send(new Response(201, {usuario: result}, 'Usuario agregado con exito!')) })
    .catch(e => {res.send(new Response(500, null, e.message))})
})

module.exports = router;
