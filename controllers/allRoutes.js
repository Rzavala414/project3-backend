const router = require("express").Router();
//TODO:Create five routes to our 
//TODO:Make those routes connect to our mongo database
//TODO:have the data base update when a new game is played

router.router("/")
    .get()
    .post()

router.router("/signup")
    .get()
    .post()

router.router("/profile")
    .get()

router.router("/leaderboard")
    .get()

router.router("/overallstats")
    .get()

router.router("/newgame")
    .get()
    .post()
    .put()