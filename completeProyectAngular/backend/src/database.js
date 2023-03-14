const mongoose = require('mongoose');

// const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/portafolio';
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/dbtest';
mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('the database has been connected to the: ', URI);
});