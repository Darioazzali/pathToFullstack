const express = require('express');
const morgan = require ('morgan');
const path = require('path');
require('dotenv').config();

const { mongoose } = require('./database')
const app= express()
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev")) // Per loggare tutto ciò che passa nel server
app.use(express.json()) //Per poter leggere in Json

//Routes
app.use('/api/clitotem',require('./routes/task.routers'))

//Static files
console.log(path.join(__dirname, "..", "client", "public"))
app.use(express.static(path.join(__dirname, "..", "client", "build")));

//Starting the server
app.listen(app.get('port'), ()=>{console.log(`Listening on port: ${app.get('port')}`)})