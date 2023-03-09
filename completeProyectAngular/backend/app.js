'use strict'

const express = require('express');
const cors = requiere ('cors');

const app = express();

// configuración
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.get('/', (req, res)=>{ res.send('Welcome the api rest')});
app.use('/api/project', requiere('./routes/project'));

module.exports = app;

