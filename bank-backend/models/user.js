const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_info_schema = new Schema({
    //use mongo-generated id + date for respective fields
    user_ssn: {
        type: Number,
        require: true
    },
    user_username: {
        type: String,
        require: true
    },
    user_password: {
        type: String,
        require: true
    },
    balance: {
        type: Number
    },
    user_email: {
        type: String,
        require: true
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    user_DOB: {
        type: String,
        require: true
    },
});
module.exports = mongoose.model("user_info", user_info_schema);