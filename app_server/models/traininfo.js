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

mongoose.model('Traininfo', traininfoSchema)