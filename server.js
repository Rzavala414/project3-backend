var express = require('express');
//using express-session to enable session storage for our server
var session = require("express-session");
const mongoose = require("mongoose");
//access for all our routes
var routes = require('./controllers');
const cors = require('cors');
require('dotenv').config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
//imports entire controllers folder, we will handle modularization there

// Requiring our models for syncing
// var db = require('./models');

// offline Testing for  local machine 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cribsmack", { useUnifiedTopology: true, useNewUrlParser: true });
// online Deployment
// mongoose.connect(process.env.MONGODB_URI || "mongodb:  https://cribsmack-be.herokuapp.com/", { useUnifiedTopology: true, useNewUrlParser: true });
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    // offline Testing for  local machine 
    origin: "http://localhost:3000",
    // online Deployment
    // origin: "https://cribsmack.herokuapp.com/",
    credentials: true
}));
app.use(session({ secret: process.env.SESSION_SECRET }))

//allows express to use our routes
// app.get("/test", (req,res)=>res.send("connected"))
app.use('/', routes)



// Connect to the Mongo DB

app.listen(PORT, function () {
    console.log(`app listening on http://localhost:${PORT}`)
})
