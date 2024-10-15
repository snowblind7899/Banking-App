const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transaction_schema = new Schema({
    //transaction id = mongo generated _id
    //transaction date + time = mongo generated date + time
    sent_to: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    sent_from: {
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    amount: {
        type: Number,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model("transfer_data", transaction_schema);