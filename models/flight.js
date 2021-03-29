const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        min: 10, max: 9999,
        default: function() {
            return Math.floor(Math.random() * 1000)
        }
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const nextYear = date.getFullYear() + 1;
            return date.setFullYear(nextYear);
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);