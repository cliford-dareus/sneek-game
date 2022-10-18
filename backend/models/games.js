const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name: {
        type : 'String',
        trim: true,
        required: [true, 'A name is required'],
        maxlength: 20,
        unique: true
    },
    imageURL: {
        type: 'String',
        trim: true,
        required: true
    },
    genre: {
        type : ['String'],
        trim: true,
        required: true,
        min: [1, 'Must have atleast 1 genre provided']
    },
    rating: {
        type : 'Number',
        trim: true,
        default: 'N/A'
    },
    release_date: {
        type : 'Date',
        trim: true,
        default: 'TBA'
    },
    _collection:{
        type: 'String',
        default: 'none'
    },
    featured: {
        type : 'Boolean',
        default: false
    },
    createdAt: {
        type: 'Date',
        default: Date.now()
    }

});

module.exports = mongoose.model('Game', gameSchema);