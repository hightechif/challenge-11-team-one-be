var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const swaggerUI = require('swagger-ui-express');
const cors = require("cors");
const swaggerJSON = require('./swagger.json');

app.use(cors()) 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));
app.use('/', indexRouter);

app.use((req,res, next)=>{
    const error = new ("Not Found!");
    error.status=404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status|| 500);
    res.json({
        error:{
            message:error.message,
        }
    })
})

module.exports = app;
