const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American, Southwest, United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: function(){
            return 'DEN'
        }
    },
    flightNo: Number,
    departs: Date
})

module.exports = mongoose.model('Flight', flightsSchema)