// Require modules
const express = require('express');
const morgan = require('morgan');
const port = 3050;
require('./config/database');

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');

//Set up Express App
const app = express();

//Connect to dtabase

//Configure app
app.set('view engine', 'ejs');

//Mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);

app.listen(port, function() {
    console.log(`Express is litening on port:${port}`)
});