const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WeatherSchema = new Schema(
    {
        date: {type: String},
        dayPictureUrl: {type: String},
        weather: {type: String},
        wind: {type: String},
        temperature: {type: String},
    },
    {timeStamps: true}
);

module.exports = mongoose.model('Weather', WeatherSchema);