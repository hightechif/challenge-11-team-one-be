var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJSON = require('./swagger.json');

const authController = require('./controllers/auth.controller')
// Routier
var indexRouter = require('./routes/index');
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
// app.use('/', indexRouter);

app.post('/api/v1/auth/register', authController.register);
app.post('/api/v1/auth/login', authController.login);
// Error Handlers
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
