# Fuego de Quasar

## Instalación Local
Para poder ejecutar el programa de manera local, toca tener instalado [nodejs](https://nodejs.org/) y [npmjs](https://www.npmjs.com/).

Luego hay que clonar el repositorio haciendo click en el botón verde donde dice código, se descarga el zip. Ya adentro del proyecto toca instalar las dependencias:

    $ sudo npm install

Iniciar el servidor:

    $ npm start

## Servidor en la nube
El servidor para el backend se encuentra desplegado en una máquina EC2 de AWS.

## Servicios
Vale la pena aclarar que todos los servicios funcionan con http, no con https.

#### POST /topsecret
  - http://52.1.216.149:3000/topsecret

La idea es que este servicio responda:
-   HTTP Status 200 si puede devolver posición de la nave y mensaje de auxilio
-   HTTP Status 404 si no puede devolver posición de la nave y/o mensaje de auxilio
#### Request Body
```
{
    "satellites": [
        {
            "name": "kenobi",
            "distance": 100.0,
            "message": ["este","","","mensaje",""]
        },
        {
            "name": "skywalker",
            "distance": 115.5,
            "message": ["","es","","","secreto"]
        },
        {
            "name": "sato",
            "distance": 142.7,
            "message": ["este","","un","",""]
        }
    ]
}
```
#### Response Body
- HTTP Status 200
```
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
- HTTP Status 404
```
{'No hay información suficiente para obtener mensaje o posición de la nave'}
```

#### POST /topsecret_split/:satellite_name
  - http://52.1.216.149:3000/topsecret_split/:satellite_name

La idea es que este servicio responda:
-   HTTP Status 200 si puede devolver posición de la nave y mensaje de auxilio
-   HTTP Status 404 si no puede devolver posición de la nave y/o mensaje de auxilio
#### Request Body
```
{
"distance":200.0,
"message":["este","","","mensaje",""]
}
```
#### Response Body
- HTTP Status 200
```
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
- HTTP Status 404
```
{'No hay información suficiente para obtener mensaje o posición de la nave'}
```

#### GET /topsecret_split
  - http://52.1.216.149:3000/topsecret_split

La idea es que este servicio responda:
-   HTTP Status 200 con la posición de la nave y mensaje de auxilio
-   HTTP Status 404 si no puede devolver posición de la nave y/o mensaje de auxilio
#### Response Body
- HTTP Status 200
```
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
- HTTP Status 404
```
{'No hay información suficiente para obtener mensaje o posición de la nave'}
```

## API para Postman

- [Fuego-Quasar-API.postman_collection.json](https://github.com/carlosinfante98/fuego-de-quasar/blob/main/Fuego-Quasar-API.postman_collection.json) sirve para poder probar los servicios en Postman.
