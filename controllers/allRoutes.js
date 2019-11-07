const router = require("express").Router();
const db = require("../models");
const authRoutes = require("./auth");

// router.use("/auth", authRoutes);

router.get("/profile", function (req, res) {
    console.log('/profile req', req.session)
    //   db.Users.session.findOne({"win-percentage":1});
    if (req.session.user) {

        db.User.findOne({ _id: req.session.user.id }).then(function(user){
            res.json(user)
        })
    } else {
        res.send("No Profile loaded")
    }
});
router.get("/leaderboard-win-percentage", function (req, res) {
    //TODO:sor all Users by wins
    db.User.find().sort({ "wins": -1 }).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});
router.get("/leaderboard-playavg", function (req, res) {
    db.User.find().sort({ "playAvg": 1 });
});
router.get("/leaderboard-countavg", function (req, res) {
    db.User.find().sort({ "countAvg": 1 });
});
router.get("/leaderboard-cribavg", function (req, res) {
    db.User.find().sort({ "cribAvg": 1 });
});
router.get("/leaderboard-skunks", function (req, res) {
    db.User.find().sort({ "skunks": 1 });
});
router.get("/leaderboard-skunked", function (req, res) {
    db.User.find().sort({ "skunked": 1 });
});
//TODO: update newgame route to what frontend displays
router.get("/gamecard", function (req, res) {
    db.GameCard.findOne({ _id: req.body.id }).sort({date: req.body.date}).then(user => {
        res.json(user)
    })
});
router.post("/gamecard", function (req, res) {
            console.log("gamecard",req.body);
            // res.json(req.body);
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
module.exports = router;
