const mongoose = require('mongoose');

const traininfoSchema = new mongoose.Schema({
    CurrentLocation: {
        type: String,
        required: true},
    PublicMessage: {
        type: String,
        required: true},
    ExpArrival: {
        type: String,
        required: true}
});

//first arg is name of collection, sec arg is schma used to create the collection
mongoose.model('Traininfo', traininfoSchema, 'Traininfo')

