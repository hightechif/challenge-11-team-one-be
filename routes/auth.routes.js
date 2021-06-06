const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Middleware
const {restrict} = require('../middlewares/restrict');

// router.get('/', apiController.apiIndex);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/whoami', restrict, authController.whoami);

module.exports = router;
