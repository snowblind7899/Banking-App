const express = require("express");
const transfer_data = require("../models/transfer.js");
const bodyParser = require("body-parser");
const router = express.Router();

router.post("/new", bodyParser.urlencoded(), async(req,res) => {
    const { sent_id, recieve_id, amount  } = req.body
    const new_transfer =  await transfer_data.create({sent_to: recieve_id, sent_from: sent_id, amount: amount})
    console.log(new_transfer)
    return res.status(200).json(new_transfer)
})

module.exports = router;