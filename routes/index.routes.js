const express = require('express');
const router = express.Router();

const cvController = require('../controllers/cv.controller')
const homeController = require('../controllers/index.controller')
const {restrict} = require('../middlewares/restrict')
const authRouter = require('./auth.routes');

router.get('/', homeController.home)
router.use('/api/v1/auth/', authRouter)
router.post('/api/v1/create-cv',restrict, cvController.createCv)

module.exports = router;
