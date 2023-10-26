const traininfoget = function(req, res){
    res.render('mainpage', {
        title: 'TrainCheck',
        theinfo: [{
            CurrentDestination: 'Mallow',
            Traininfo: 'Cork to Mallow',
            ExpArrival: '23:06'
        },{
            CurrentDestination: 'Farrenfore',
            Traininfo: 'Tralee to Dublin Hueston',
            ExpArrival: '20:00'
        },{
            CurrentDestination: 'Killarney',
            Traininfo: 'Cork to Tralee',
            ExpArrival: '19:00'
        },{
            CurrentDestination: 'Galway',
            Traininfo: 'Galway to Dublin Hueston',
            ExpArrival: '18:00'
        },{
            CurrentDestination: 'Galway',
            Traininfo: 'Galway to Killdare',
            ExpArrival: '15:00'
        }]
    });
};


module.exports = {
    traininfoget
};

