const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    artName: 
    {
        type: String
    },
    serial:
    {
        type: Number
    },
    src:
    {
        type: String, required: true
    },
    alt:
    {
        type: String
    },
    bids:
    [{
        user: {
            type: String,
            required: true
        },
        bid: {
            type: Number,
            required: true
        }
    }]
    
});

const art = mongoose.model("artrecords", recipeSchema);

module.exports = art;