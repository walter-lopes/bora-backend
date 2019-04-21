'use strict';

const mongoose = require('mongoose');
const Address = require('./address');
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
    location: Address.schema
});

module.exports = mongoose.model('Bora', schema);