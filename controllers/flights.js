const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights',  flights});
    });
};

function newFlight(req, res) {
    const newFly = new Flight();
    const dt = newFly.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {title: 'Add Flight', departsDate});
};

function create(req, res) {
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    Flight.create(req.body, function(err, flight) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
};
