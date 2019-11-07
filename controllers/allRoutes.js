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
        res.send("NO PRofile loaded")
    }
    //TODO:Win percentages
});
router.get("/leaderboard-win-percentage", function (req, res) {
    //TODO:sor all Users by wins
    db.User.find().sort({ "wins": -1 }).then(dbUsers=>{
        res.json(dbUsers)
        console.log(dbUsers)
    });
});
router.get("/leaderboard-playavg", function (req, res) {
    //TODO:sort all Users by playavg)
    db.Users.find().sort({ "playAvg": 1 });
});
router.get("/leaderboard-countavg", function (req, res) {
    db.Users.find().sort({ "countAvg": 1 });
});
router.get("/leaderboard-cribavg", function (req, res) {
    db.Users.find().sort({ "cribAvg": 1 });
});
router.get("/leaderboard-skunks", function (req, res) {
    db.Users.find().sort({ "skunks": 1 });
});
router.get("/leaderboard-skunked", function (req, res) {
    db.Users.find().sort({ "skunked": 1 });
});
//TODO: update newgame route to what frontend displays
router.get("/gamecard", function (req, res) {
    db.GameCard.findOne({ _id: req.body.id }).then(user => {
        res.json(user)
    })
});
router.post("/gamecard", function (req, res) {
    db.GameCard.create(req.body).then(GameCard => {
        //TODO: Once we have the gamecard with userOne, UserTwo, and Hands array, we can then run the logic again to push those averages to the Users
        res.json(GameCard);
    })
});
router.post("/user", function (req, res) {
    db.User.findOneAndUpdate(req.body).then(User => {
        //TODO: update User averages and games
        res.json(User);
    })
});
module.exports = router;
