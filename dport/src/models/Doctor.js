const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Doctor = new Schema({
    dname :{
        type: String
    },
    description:{
        type: String
    },
    phone :{
    	type: String
    }
});

module.exports = mongoose.model('Doctor', Doctor);