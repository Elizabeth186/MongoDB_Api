'use strict'
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


//configuraciones
const port = process.env.PORT || 3000;
app.set('json spaces', 2);

//conexion a mondb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://bdUser:bdUser@cluster0.emviziy.mongodb.net/?retryWrites=true&w=majority').then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

//rutas
app.use(require('./routes/index'));

//servidor iniciado
app.listen(port, () => {
    console.log('Server listening on port 3000')
})