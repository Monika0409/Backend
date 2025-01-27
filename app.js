require('dotenv').config();

const express = require("express");
// import express from 'express;      // import model in package.json
// export default app;
const cors = require("cors");

const connectToDB = require('./config/b.js')
const app = express();

// express middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())


connectToDB()         // to connect db


const userRouters = require('./routes/userRoutes.js')

app.use('/', userRouters);

module.exports = app;             // dont need to right module in package.json
 