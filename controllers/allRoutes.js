const router = require("express").Router();
const db = require("../models");
const authRoutes = require("./auth");


router.get("/profile", function (req, res) {
    console.log('/profile req', req.session)
    if (req.session.user) {

        db.User.findOne({ _id: req.session.user.id }).limit(5).then(function(user){
            res.json(user)
        })
    } else {
        res.send("No Profile loaded")
    }
});

//sorts all Users by wins
router.get("/leaderboard-win-percentage", function (req, res) {
    db.User.find().sort({ "wins": -1 }).limit(5).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});

// sorts Users by Play Average
router.get("/leaderboard-playavg", function (req, res) {
    db.User.find().sort({ "playAvg": -1 }).limit(5).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});

//sorts all Users by Count Average
router.get("/leaderboard-countavg", function (req, res) {
    db.User.find().sort({ "countAvg": -1 }).limit(5).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});

// Sorts all Users by crib Average
router.get("/leaderboard-cribavg", function (req, res) {
    db.User.find().sort({ "cribAvg": -1 }).limit(5).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});

// Sorts all users by Skunks 
router.get("/leaderboard-skunks", function (req, res) {
    db.User.find().sort({ "skunks": -1 }).limit(5).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});

// Sorts all users by how many times they've been skunked
router.get("/leaderboard-skunked", function (req, res) {
    db.User.find().sort({ "skunked": -1 }).limit(5).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});


router.get("/gamecard", function (req, res) {
    db.GameCard.findOne({ _id: req.body.id }).sort({date: req.body.date}).then(user => {
        res.json(user)
    });
});
router.post("/gamecard", function (req, res) {
            console.log("gamecard",req.body);
            res.json(req.body);
    db.GameCard.create({
        //TODO: Once we have the gamecard with userOne, UserTwo, and Hands array, we can then run the logic again to push those averages to the Users
        date:req.body.date,
        userOne:req.body.username,
        userTwo:req.body.usernameTwo,
        userOnePlayAverage:req.body.userOnePlayAverage,
        userOneCountAverage:req.body.userOneCountAverage,
        userOneCribAverage:req.body.userOneCribAverage,
        userTwoPlayAverage:req.body.userTwoPlayAverage,
        userTwoCountAverage:req.body.userTwoCountAverage,
        userTwoCribAverage:req.body.userTwoCribAverage,
        hands:req.body.hands
    }).then(GameCard => {
            res.json(GameCard);
    })
});
router.post("/user", function (req, res) {
    console.log("user",req.body)
    db.User.findOneAndUpdate({
        // req.body.username,
        //TODO: Run Math to update User averages and games; run function to calculate overall averages;
        wins: req.body.wins,
        loss: req.body.loss,
        playAvg: req.body.playAvg,
        countAvg: req.body.countAvg,
        cribAvg: req.body.cribAvg,
        skunks: req.body.skunks,
        skunked: req.body.skunked
    }).then(User => {
        res.json(User);
    })
});

router.get("/user", function (req, res) {
    console.log("user",req.body)
    db.User.find()

})

module.exports = router;
