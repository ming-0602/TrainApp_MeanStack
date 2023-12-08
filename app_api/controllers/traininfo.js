const mongoose = require('mongoose');
const Trains = mongoose.model('Traininfo');
const trainReadone = function (req, res){
    Trains
        .findById(req.params.trainid)
        .then((train,err) => {
            res
                .status(200)
                .json(train);
        });
}

const trainCreate = function(req, res, next) {
    console.log(req.body)
    Trains.create({
        CurrentLocation: req.body.CurrentLocation,
        PublicMessage: req.body.PublicMessage,
        ExpArrival: req.body.ExpArrival
    }).then ((train, err) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(train);
        }
    });
};

const trainReadAll = function (req, res) {
    Trains
        .find()
        .then((train, err) => {
            if (!train) {
                res
                    .status(404)
                    .json({
                        "message": "locationid not found"
                    });
                return;
            } else if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(train);
        });
};



module.exports = {
    trainReadone,
    trainCreate,
    trainReadAll
}