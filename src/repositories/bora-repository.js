'use strict';
const mongoose = require('mongoose');
const Bora = mongoose.model('Bora');

exports.create = async(data) => {
    var bora = new Bora(data);
    await bora.save();
}