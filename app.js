var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJSON = require('./swagger.json');

// Routier
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users.routes.js');

// Activate Express Module
var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON)); // Swagger

// Routing (Endpoints and Handlers)
app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Error Handlers
app.use(errorMiddleware.errorHandler); // Internal Server Error Handler
app.use(errorMiddleware.error404Handler); // Error 404 Handler

module.exports = app;
