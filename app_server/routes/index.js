var express = require('express');
var router = express.Router();
const axios = require('axios');


const ctrlMain = require('../controllers/main')
const ctrltraininfo = require('../controllers/traininfodata')


//get controller home page
// router.get('/', ctrlMain.mainpage)
router.get('/', ctrltraininfo.traininfoget)
router.get('/favourite', ctrlMain.favouritepage)
router.get('/loginpage', ctrlMain.loginpage)
router.get('/registerpage', ctrlMain.registerpage)


module.exports = router;
