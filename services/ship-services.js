const { satellites } = require("../database/satellites");
const trilateration = require("node-trilateration");

const updateSatellites = (newSatellites) => {
    newSatellites.forEach((newSat) => {
        let satellite = satellites.find((x) => x.name.toLowerCase() == newSat.name.toLowerCase());
        if (satellite) {
            satellite.distance = newSat.distance;
            satellite.message = newSat.message;
        }
    });
};

const getLocation = () => {
    let beacons = [];
    satellites.forEach((satellite) => {
        if (typeof satellite.distance == undefined) {
            throw 'Cantidad de información insuficientes para calcular posición de la nave';
        }
        beacons.push({
            x: satellite.position.x,
            y: satellite.position.y,
            distance: satellite.distance
        });
    });

    let { x, y } = trilateration.calculate(beacons);

    return { x, y };
};

const getMessage = () => {
    const messageLength = satellites[0].message.length;
    let result = [];
    for (let i = 0; i < messageLength; i++) {
        for (let j = 0; j < satellites.length; j++) {
            const msg = satellites[j].message[i];
            if (msg) {
                result.push(msg);
                break;
            }
        }
    }
    if (result.length < messageLength) {
        throw 'No hay información suficiente para indicar posición y mensaje de auxilio';
    }

    return result.join(" ");
};


module.exports = {
    getLocation,
    getMessage,
    updateSatellites
}