const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
    email :{
        type: String
    },
    pwd :{
        type: String
    },
    aname :{
    	type: String
    }
});

module.exports = mongoose.model('Admin', Admin,'admins');
