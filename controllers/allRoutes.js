const router = require("express").Router();
// const db = require("../models")


router.get("/signup",function(req,res){
    res.send("sign me up")
})

router.post("/signup",function(req,res){

})


module.exports = router;