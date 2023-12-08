const request = require('request');
const axios = require('axios');

const apiOptions = {
    server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://nodbtrainapp-ming.onrender.com/';
}
const traininfoget = async function (req, res) {
    try {
        // Make a request to your API endpoint to get train data
        const response = await axios.get('http://localhost:3000/api/traininfo/');
        const trainData = response.data;

        res.render('mainpage', {
            title: 'TrainCheck',
            theinfo: trainData,
        });
    } catch (error) {
        console.error('Error fetching train data:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    traininfoget
};

