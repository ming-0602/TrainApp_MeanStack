const mongoose = require('mongoose');
const Trains = mongoose.model('Traininfo');
const trainReadone = function (req, res){
    // res
    //     .status(200)
    //     .json({"status" : "success"});

    Trains
        .findById(req.params.trainid)
        .then((train,err) => {
            res
                .status(200)
                .json(train);
        });

}


// const trainReadone = function (req, res) {
//     Trains
//         .findById(req.params.trainid)
//         .then((train) => {
//             if (!train) {
//                 // Handle the case where the document is not found
//                 console.log(`Train with ID ${req.params.trainid} not found.`);
//                 return res.status(404).json({ error: 'Train not found' });
//             }
//
//             // Continue processing with the train object
//             console.log('Train found:', train);
//             res.status(200).json(train);
//         })
//         .catch((err) => {
//             // Handle errors
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
// };

const trainCreate = function(req, res) {
    console.log('Request Body:', req.body);

    Trains.create({
        CurrentLocation: req.body.CurrentLocation,
        PublicMessage: req.body.PublicMessage,
        ExpArrival: req.body.ExpArrival,
    })
        .then((train, err) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(train);
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