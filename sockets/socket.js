const {io} = require('../index');

//Mensajes de sockets
io.on('connection', client => {
  console.log('Cliente Conectado');
  client.on('disconnect', () => { console.log('Cliente desconectado')});

  client.on('mensaje',(payload)=>{
    console.log("!Mensaje", payload);//escuchar del lado del sevidor
    io.emit('mensaje',{admin:'Nuevo mensaje'});//emite mensaje a todos los cliente conectados
  })

});