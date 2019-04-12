const express = require('express');
const app = express();
//Importar rutas
const indiceRutas=require('./rutas/index');

//Usamos las rutas
app.use('/',indiceRutas);

//Activar el servidor de escucha 
app.listen(3000, () => {
	console.log("Escuchando el puerto 3000, jajaja");
})