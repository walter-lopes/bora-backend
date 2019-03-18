'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }],
    location: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address' 
    }] 
});

module.exports = mongoose.model('User', schema);