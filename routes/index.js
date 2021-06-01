var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth.controller');
// const {restrict} = require('../middlewares/restrict')

router.post('/api/v1/auth/register', authController.register);

router.post('/api/v1/auth/login', authController.login);

module.exports = router;
