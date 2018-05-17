const express = require('express');

const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();

// Definir el servidor
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializamos el socketIO (comunicación con el backend)
// Exportar la variable para trabajar en otros archivos
module.exports.io = socketIO(server);

require('./sockets/socket');


// Para saber si un usuario esta conectado

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});