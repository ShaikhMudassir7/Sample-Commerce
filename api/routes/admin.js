const express = require("express")
const router = express.Router()

router.get('/login', (req, res) => {
    res.render("./admin/login")
})

router.get('/signup', (req, res) => {
    res.render("./admin/signup")
})

router.get('/reset', (req, res) => {
    res.render("./admin/reset")
})
module.exports = router