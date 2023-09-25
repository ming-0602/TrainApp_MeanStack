var express = require('express');
var router = express.Router();


const ctrlMain = require('../controllers/main')


//get controller home page
router.get('/', ctrlMain.mainpage)
router.get('/favourite', ctrlMain.favouritepage)
router.get('/loginpage', ctrlMain.loginpage)
router.get('/registerpage', ctrlMain.registerpage)

module.exports = router;
