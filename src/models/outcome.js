const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Outcome = new Shema({
    user: {
        type: mongoose.Shema.Types.ObjectId,
        ref: 'User'
    },
    value: Number,
    createdAt: {
        type: Date,
        defaukt: Date.now
    }
});

module.exports = mongoose.model('outcomes', Outcome)
