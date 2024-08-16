require('dotenv').config()
const express = require('express')
const userRoute = require('./Routes/userRoute.js')
const dbconnect = require('./config/db.js')
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
dbconnect();
app.use('/',userRoute)


module.exports = app