'use strict'

const express = require('express');
const cors = require ('cors');

const app = express();

// configuración
app.set('port', process.env.PORT || 3700);

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.get('/', (req, res)=>{ res.send('Welcome the api rest')});
app.use('/api/project', require('./routes/project'));

module.exports = app;

