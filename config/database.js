const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:mushookie@cluster0.zyypm.mongodb.net/mongoose-flights?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to mongodb on ${db.host}:${db.port}`)
});