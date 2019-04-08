'use strict';
const mongoose = require('mongoose');
const Bora = mongoose.model('Bora');

exports.create = async(data) => {
    var bora = new Bora(data);
    await bora.save();
}

exports.includeParticipants = async(id, data) => {
    await Bora.findByIdAndUpdate(id, {
        $set: {
            participants: data.participants
        }
    });
}

exports.get = async() => {
    var boras = await Bora.find();
    return boras;
}