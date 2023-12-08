const ctrltraininfo = require('../../app_server/controllers/traininfodata')

const mongoose = require('mongoose');

const dbURI = "mongodb+srv://admin:admin@cluster0.yxrab4v.mongodb.net/Trains"

try {
    mongoose.connect(
        dbURI,
        { useNewUrlParser: true, useUnifiedTopology: true }).then(
        () => {console.log(" Mongoose is connected")},
        err=> {console.log(err)}
    );
}
catch (e) {
    console.log("could not connect");
}

require('./traininfo');
require('./account')
