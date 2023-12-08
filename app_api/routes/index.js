const express = require('express');
const router = express.Router();
const ctrltrain = require('../controllers/traininfo');
var Account = require('../models/account');
var passport = require('passport');
const ctrlaccount = require('../controllers/accont')

router
    .route('/traininfo/:trainid')
    .get(ctrltrain.trainReadone);

router
    .route("/traininfo")
    .post(ctrltrain.trainCreate)
    .get(ctrltrain.trainReadAll)

router
    .route("/registerpage")
    .post(ctrlaccount.register)

router
    .route("/loginpage")
    .post(ctrlaccount.login)

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;