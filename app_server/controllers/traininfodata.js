
// var router = express.Router();
const request = require('request');
const axios = require('axios');

const apiOptions = {
    server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://nodbtrainapp-ming.onrender.com/';
}

// const traininfoget = async (req , res) => {
//     // const path = 'http://localhost:3000/api/traininfo';
//     // const requestOptions = {
//     //     url : path,
//     //     method : 'GET',
//     //     json : {},
//     // };
//     // request(requestOptions, (err, response, body) => {
//     //         _renderHomepage(req, res);
//     //     }
//     // );
//     try {
//         // Make a request to your API endpoint to get train data
//         const response = await axios.get('http://localhost:3000/api/traininfo/');
//         const trainData = response.data;
//
//         res.render('mainpage', {
//             title: 'TrainCheck',
//             theinfo: trainData,
//         });
//     } catch (error) {
//         console.error('Error fetching train data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };


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








// const traininfoget = function(req, res){
//     res.render('mainpage', {
//         title: 'TrainCheck',
//         theinfo: [{
//             CurrentDestination: 'Mallow',
//             Traininfo: 'Cork to Mallow',
//             ExpArrival: '23:06'
//         },{
//             CurrentDestination: 'Farrenfore',
//             Traininfo: 'Tralee to Dublin Hueston',
//             ExpArrival: '20:00'
//         },{
//             CurrentDestination: 'Killarney',
//             Traininfo: 'Cork to Tralee',
//             ExpArrival: '19:00'
//         },{
//             CurrentDestination: 'Galway',
//             Traininfo: 'Galway to Dublin Hueston',
//             ExpArrival: '18:00'
//         },{
//             CurrentDestination: 'Galway',
//             Traininfo: 'Galway to Killdare',
//             ExpArrival: '15:00'
//         }]
//     });
// };








module.exports = {
    traininfoget
};

