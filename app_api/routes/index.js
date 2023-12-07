const express = require('express');
const router = express.Router();
const ctrltrain = require('../controllers/traininfo');

router
    .route('/traininfo/:trainid')
    .get(ctrltrain.trainReadone);

router
    .route("/traininfo")
    .post(ctrltrain.trainCreate)
    .get(ctrltrain.trainReadAll)

module.exports = router;