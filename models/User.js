const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    occupation: {
        type: String,
        default: 'Unspecified'
    },
    date: {
        type: Date,
        default: Date.now

    }

});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
