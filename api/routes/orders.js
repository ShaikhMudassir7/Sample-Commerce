const express = require("express")
const router = express.Router()

const Orders = require("../models/orders");

router.get('/', (req, res) => {
    res.render("./orders/orders")
})

module.exports = router