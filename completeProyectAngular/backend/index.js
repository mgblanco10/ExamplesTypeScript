'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3700
//ojo luego enviarme esto a .env

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
.then(() => {
	console.log("started successfully");
	
	// Creacion del servidor
	app.listen(port, () => {
		console.log(`started and listening in port ${port}` );
	});
	
})
.catch(err => console.log(err));


