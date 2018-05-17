var socket = io();

// Escuchar información
// Conecatarse al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Cuando se desconecta del servidor
socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
});

// Eviar emitir información
socket.emit('enviarMensaje', {
    // usuario: 'Iván',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log('Respuesta del servidor', res);
})

// // Escuchar información
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor: ', respuesta);
});