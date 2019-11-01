const router = require("express").Router();
// const db = require("../models/index")

 router.get("/",function(req,res){
     res.send("Everything good here at home cap")
 }).get("/login")

router.get("/signup",function(req,res){
    res.send("sign me up")
})
router.post("/signup",function(req,res){
})
router.get("/profile",function(req,res){
    res.send("profile ready")
    
})
router.get("/leaderboard",function(req,res){
    res.send("leaderboard check")
    
})
router.get("/stats",function(req,res){
    res.send("stats goober")
    
})
router.get("/newgame",function(req,res){
    res.send("New game??????")

})
router.post("/newgame",function(req,res){

})
router.put("/newgame",function(req,res){

})

module.exports = router;