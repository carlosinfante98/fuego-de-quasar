const { getLocation, getMessage, updateSatellites } = require('../services/ship-services');


const postSatellitesMessages = (req, res) => {
    try {
        let satellites = req.body.satellites;
        updateSatellites(satellites);
        const position = getLocation();
        const message = getMessage();
        res.json({ position, message });
        return res;
    } catch (err) {
        res.status(404).json('No hay información suficiente para obtener mensaje o posición de la nave');
    }
}

const postSingleMessage = (req, res) => {
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
        return res;
    } catch (err) {
        res.status(404).json('No hay información suficiente para obtener mensaje o posición de la nave');
    }
}

const getFinalSecret = (req, res) => {
    try {
        const position = getLocation();
        const message = getMessage();
        res.json({ position, message });
        return res;
    } catch (err) {
        res.status(400).json('No hay información suficiente para obtener mensaje o posición de la nave');
    }
}

module.exports = {
    postSatellitesMessages,
    postSingleMessage,
    getFinalSecret
}