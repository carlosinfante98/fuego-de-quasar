// Modulos para crear el servidor
const express = require('express');
const routes = require('../routes/routes');

class Server {
    constructor() {
        // Configuracion del servidor
        this.app = express();
        this.port = 3001;

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.generalRoutes();
    }

    middlewares() {

        // Parseo y lectura del body
        this.app.use(express.json());
    }

    generalRoutes() {
        this.app.use('/', routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });

    }
}

module.exports = Server;