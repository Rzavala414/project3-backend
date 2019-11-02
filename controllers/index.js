const router = require("express").Router();
// const db = require("../models/index")
//TODO:Make those routes connect to our mongo database
//TODO:have the data base update when a new game is played


module.exports = router;


const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const allRoutes = require("./allRoutes.js")

router.get("/",(res,req)=>res.json("hello, connected"))

router.use('/auth',authRoutes);
router.use("/allRoutes",allRoutes);

module.exports = router;