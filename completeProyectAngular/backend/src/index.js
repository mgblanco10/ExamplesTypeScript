'use strict'

require ('dotenv').config();
const app = require('./app');
require('./database')

async function main(){

	await app.listen(app.get('port'))
	console.log('started and listening in port: ', app.get('port'));
}

main();


