var express = require('express');
var logger = require('morgan');


var app = express();

const foodRouter = require('./routes/food')

// view engine setup


app.use(logger('dev'));
app.use(express.json());

app.use('/food',foodRouter)
app.use('/',(req,res,next)=>res.send("home"))


module.exports = app;
