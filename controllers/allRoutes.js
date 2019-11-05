const router = require("express").Router();
const db = require("../models");
const authRoutes = require("./auth");

// router.use("/auth", authRoutes);

router.get("/profile", function (req, res) {
    console.log('/profile req', req.session)
    //   db.Users.session.findOne({"win-percentage":1});
    if (req.session.user) {

        db.Users.findOne({ _id: req.session.user.id }).then(function(user){
            res.json(user)
        })
    } else {
        res.send("NO PRofile loaded")
    }
    //TODO:Win percentages
});
router.get("/leaderboard-win-percentage", function (req, res) {
    //TODO:sor all Users by wins
    db.Users.find().sort({ "win-percentage": 1 });
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
router.get("/newgame", function (req, res) {
    db.GameCard.findOne({ _id: req.body.id }).then(user => {
        res.json(user)
    })
});
router.post("/newgame", function (req, res) {
    db.GameCard.create(req.body).then(gameCard => {
        res.json(gameCard);
    })
});

module.exports = router;
