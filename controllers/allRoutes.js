const router = require("express").Router();
const db = require("../models")
const authRoutes = require("./auth")

router.use("/auth", authRoutes)

router.get("/signup", function (req, res) {
    res.send("sign me up")
})

router.post("/signup", function (req, res) {

})


module.exports = router;