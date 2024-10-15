const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transaction_schema = new Schema({
    //transaction id = mongo generated _id
    //transaction date + time = mongo generated date + time
    transaction_type: {
        type: String,
        require: true
    },
    transaction_amount: {
        type: Number,
        require: true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model("transaction_data", transaction_schema);
