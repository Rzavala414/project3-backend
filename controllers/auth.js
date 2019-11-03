const express = require("express")
const router = express.Router();
const bcrypt = require('bcrypt')
const db = require("../models");


//get route for secret clubhouse, if logged in will elt you in, otherwise will fail
router.get('/secret', function (req, res) {
    if (req.session.user) {
        res.status(200).send('secretssssssssssssss')
    } else {
        res.status(401).send('log in first jabroni!')
    }
})


//creates new instance of user
router.post('/signup', function (req, res) {
    console.log(req.body)
    db.User.create({
        username: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(function (newUser) {
        console.log(newUser)
        res.json(newUser);
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})


//route for user login
router.post('/login', function (req, res) {
    db.User.findOne({
        username: req.body.name
    }).then(function (dbUser) {
        console.log(dbUser, req.body)
        if (!dbUser) {
            res.status(500).send("no such user")
        }
        else {

            //compares password send in req.body to one in database, will return true if matched.
            if (bcrypt.compareSync(req.body.password, dbUser.password)) {
                //create new session property "user", set equal to logged in user
                req.session.user = { id: dbUser.id, name: dbUser.username }
                req.session.error = null;
                res.status(200).json(req.session);
            }
            else {
                //delete existing user, add error
                req.session.user = false;
                req.session.error = 'auth failed bro';
                res.status(401).send("password incorrect");
            }
        }
    })
})

router.get('/logout', function (req, res) {
    //delete session user, logging you out
    req.session.destroy(function () {
        res.send('successfully logged out')
    })
})

//developer route to see all the session variables.
router.get('/readsessions', function (req, res) {
    res.json(req.session);
})

module.exports = router;





























// router.get("/secret",function(req,res){
//     if(req.session.user) {
//         res.status(200).send("secret")
//     }else{
//         res.status(401).send("please login first")
//     }
// })
// router.get("/",function(req,res){

// }).get("/login")

// router.post("/",function(req,res){
//     db.User.find({"username":req.body.username}).then(function(dbUser){
//         if(!dbUser){
//             res.status(500).send("message":"The username does not exist")
//         }else{

//         }
//     })
// })

// router.get("/profile",function(req,res){
//     res.send("profile ready")

// })
// router.get("/leaderboard",function(req,res){
//     res.send("leaderboard check")

// })
// router.get("/stats",function(req,res){
//     res.send("stats goober")

// })
// router.get("/newgame",function(req,res){
//     res.send("New game??????")

// })
// router.post("/newgame",function(req,res){

// })
// router.put("/newgame",function(req,res){

// })