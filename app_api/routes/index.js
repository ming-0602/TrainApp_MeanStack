const express = require('express');
const router = express.Router();
const ctrltrain = require('../controllers/traininfo');
var Account = require('../models/account');
var passport = require('passport');

router
    .route('/traininfo/:trainid')
    .get(ctrltrain.trainReadone);

router
    .route("/traininfo")
    .post(ctrltrain.trainCreate)
    .get(ctrltrain.trainReadAll)

router.get('/registerpage', function(req, res) {
    res.render('registerpage', { });
});

router
    .post('/registerpage', function (req, res){
        Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {

                return res.render('/', { account : account });

            }
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    });

router.get('/loginpage', function(req, res) {
    res.render('loginpage', { user : req.user });
});

router.post('/loginpage', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});


router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;