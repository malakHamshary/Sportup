const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MeetupSchema = new Schema({
    eventName: {
        type: String,
        require: true
    },
    sportType: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    eventDate: {
        type: Date,
        require: true
    },
    duration: {
        type: String,
        default: 'Unspecified'
    },
    members: {
        type: Array,
        require: true
    },
    comment: {
        type: String,
        default: 'Unspecified'
    },
    active: {
        type: Boolean,
        require:true
    },
    date: {
        type: Date,
        default: Date.now

    }

});

const MeetupModel = mongoose.model('meetups', MeetupSchema);
module.exports = MeetupModel;