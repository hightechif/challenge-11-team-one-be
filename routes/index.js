var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth.controller');
const cvController = require('../controllers/cv.controller')

const {restrict} = require('../middlewares/restrict')

router.get('/', (req, res)=>{
    res.status(200).json({
        message:"Welcome to index page"
    })
})
router.get('/login',(req, res)=>{
    res.status(200).json({
        message:"Welcome to login page"
    })
})
router.get('/cv-builder',(req, res)=>{
    res.status(200).json({
        message:"Welcome to cv-builder page"
    })
})

router.post('/api/v1/auth/register', authController.register);
router.post('/api/v1/auth/login', authController.login);
router.post('/api/v1/create-cv',restrict, cvController.createCv)
module.exports = router;