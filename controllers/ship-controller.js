const { getLocation, getMessage, updateSatellites } = require('../services/ship-services');


const postSatellitesMessages = (req, res, next) => {
    try {
        let satellites = req.body.satellites;
        updateSatellites(satellites);
        const position = getLocation();
        const message = getMessage();
        res.json({ position, message });
    } catch (err) {
        res.status(404).json('No hay información suficiente para obtener mensaje o posición de la nave');
    }
    next();
}

const postSingleMessage = (req, res, next) => {
    try {
        const name = req.params.satellite_name;
        const distance = req.body.distance;
        const message = req.body.message;
        const currentSatellite = [{
            name,
            distance,
            message
        }];
        updateSatellites(currentSatellite);
        const position = getLocation();
        const msg = getMessage();
        res.json({ position, msg });
    } catch (err) {
        res.status(404).json('No hay información suficiente para obtener mensaje o posición de la nave');
    }
    next();
}

const getFinalSecret = (req, res, next) => {
    try {
        const position = getLocation();
        const message = getMessage();
        res.json({ position, message });
    } catch (err) {
        res.status(400).json('No hay información suficiente para obtener mensaje o posición de la nave');
    }
    next();
}

module.exports = {
    postSatellitesMessages,
    postSingleMessage,
    getFinalSecret
}