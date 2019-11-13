const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    email :{
        type: String
    },
    pwd :{
        type: String
    },
    uname :{
    	type: String
    }
});

module.exports = mongoose.model('User', User);