const { io } = require('../server')

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    // Mandar un mensaje al cliente cuando se conecte
    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    cliente.on('enviarMensaje', (data, respuesta) => {
        console.log(data);

        // Informar a los usuarios
        cliente.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     respuesta({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     respuesta({
        //         resp: 'TODO SALIO MAL......'
        //     });
        // }

    });

});