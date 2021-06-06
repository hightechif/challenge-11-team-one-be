// Import Module
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const indexRouter = require('./routes/index.routes');
const errorMiddleware = require('./utils/error.middleware')

// API Docs with Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJSON = require('./swagger.json');

// Activate Express Module
const app = express();

// Middlewares
app.use(cors()) 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON)); // Swagger

// Routing (Endpoints and Handlers)
app.use('/', indexRouter);

// Error Handlers
app.use(errorMiddleware.errorHandler); // Internal Server Error Handler
app.use(errorMiddleware.error404Handler); // Error 404 Handler

module.exports = app;
