const { Router } = require("express");
const { check } = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields");
const { postSatellitesMessages, postSingleMessage, getFinalSecret } = require("../controllers/ship-controller");

const router = Router();

// Metodo POST para todos los mensajes y distancias de los satelites
router.post("/topsecret", [
    check('satellites', 'No es un arreglo de satelites valido').isArray(),
    check('satellites.*.name', 'Los satelites no pueden tener nombres vacios').not().isEmpty(),
    validateFields
], postSatellitesMessages);

// Metodo POST para mensaje y distancia de un satelite
router.post("/topsecret_split/:satellite_name", [
    check('satellite_name', 'No es un nombre valido').not().isEmpty(),
    validateFields
], postSingleMessage);

// Metodo GET para el mensaje y la posicion de la nave
router.get("/topsecret_split", [
    validateFields
], getFinalSecret);

module.exports = router;