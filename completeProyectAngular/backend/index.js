'use strict'

requiere ('dotenv').config();
const app = require('./app');
requiere('./database')

async function main(){

	await app.listen(app.get('port'))
	console.log('started and listening in port: ', appget('port'));
}

main();

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
// .then(() => {
// 	console.log("started successfully");
	
// 	// Creacion del servidor
// 	app.listen(port, () => {
// 		console.log(`started and listening in port ${port}` );
// 	});
	
// })
// .catch(err => console.log(err));


