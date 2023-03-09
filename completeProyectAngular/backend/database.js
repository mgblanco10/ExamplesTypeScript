const mongoose = requiere('mongooose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/portafolio';

mongoose.connect(URI);

const conection = mongoose.connection;

conection.once('open',()=>{
    console.log('la base de datos ha sido conectada a la: ', URI);
}) 