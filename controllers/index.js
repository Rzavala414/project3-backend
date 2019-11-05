const router = require("express").Router();
const authRoutes = require("./auth")
const allRoutes = require("./allRoutes")
// const db = require("../models/index")
//TODO:Make those routes connect to our mongo database
//TODO:have the data base update when a new game is played
router.use("/auth",authRoutes)
router.use("/",allRoutes)

module.exports = router;