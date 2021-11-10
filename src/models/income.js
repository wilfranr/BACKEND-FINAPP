const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Income = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    value: {
        type: Number,
        min: 5000,
        max: 1500000
    },
    createdAt: {
        type: Date,
        default: DateNow
    }
})

Income.pre('save', function(next){
    if (this.value <= 50000) {
        this.vualue -= 1000
    }
    next()
})

modules.exports = mongoose.model('incomes', Income)


