const express = require("express");
const user_account = require("../models/user");
const bodyParser = require("body-parser");
const router = express.Router();

router.get("/home_info",async(req,res) => {
    const num_users = await user_account.countDocuments()
    const num_assets = await user_account.aggregate([{
        $group: {
            _id: " ",
            balance: { $sum: '$balance' }
        }
     }, 
     {
        $project: {
            _id: 0,
            balance: '$balance'
        }
    }])
    const menu_info = Object.assign({},{users: num_users},num_assets[0])
    console.log("menu info: ", menu_info)
    return res.status(200).json(menu_info);
})

module.exports = router;