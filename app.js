require('dotenv').config();

const express = require("express");

const cors = require("cors");

const connectToDB = require('./config/b.js')
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())


connectToDB()         


const userRouters = require('./routes/userRoutes.js')

app.use('/', userRouters);

module.exports = app;            
 
