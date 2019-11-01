const router = require("express").Router();
// const db = require("../models/index")
//TODO:Make those routes connect to our mongo database
//TODO:have the data base update when a new game is played

router.get("/",(res,req)=>res.json("hello connected"))
    
module.exports = router;