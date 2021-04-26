const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3001;
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;