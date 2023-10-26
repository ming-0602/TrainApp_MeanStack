const mainpage = function (req, res){
    res.render('mainpage', { title: 'TrainCheck'})
};

const loginpage = function (req, res) {
    res.render('loginpage', { title: 'TrainCheck'});
};

const registerpage = function (req, res){
    res.render('registerpage',{ title: 'TrainCheck'});
};

const favouritepage = function (req, res) {
    res.render('favouritepage',{ title: 'TrainCheck'});
}


module.exports = {
    mainpage,
    loginpage,
    registerpage,
    favouritepage
}
