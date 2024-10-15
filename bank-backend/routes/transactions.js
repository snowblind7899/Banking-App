const express = require("express");
const transaction_data = require("../models/transaction.js");
const bodyParser = require("body-parser");
const router = express.Router();

//new transaction
router.post("/new", bodyParser.urlencoded(), async(req,res) => {
    const { type, amount, cust_id  } = req.body
    const new_transaction =  await transaction_data.create({transaction_type: type, transaction_amount: amount, customer_id: cust_id})
    return res.status(200).json(new_transaction)
})

router.get("/:id", async(req,res) => {
    const {id} = req.params
    const found_transaction =  await transaction_data.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "transaction not found"})
    }

    if(!found_transaction){
        return res.status(404).json({error: "transaction not found"})
    }

    return res.status(200).json(found_transaction)
})

router.get("account/:id", async(req,res) => {
    const {cust_id} = req.params
    const found_transactions =  await transaction_data.find({customer_id: cust_id})

    if(!found_transaction){
        return res.status(404).json({error: "no transactions found on account"})
    }

    return res.status(200).json(found_transactions)
})

module.exports = router;