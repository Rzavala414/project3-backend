var express = require('express');
var session = require("express-session");
const mongoose = require("mongoose");
var routes = require('./controllers');
const cors = require('cors');
require('dotenv').config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;
// offline Testing for  local machine 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cribsmack", { useUnifiedTopology: true, useNewUrlParser: true });
// online Deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb:localhost/mongoHeadlines", { useUnifiedTopology: true, useNewUrlParser: true });
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    // offline Testing for  local machine 
    // origin: "http://localhost:3000",
    // online Deployment
    origin: "https://cribsmack.herokuapp.com",
    credentials: true
}));
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use('/', routes)
app.listen(PORT, function () {
    console.log(`app listening on ${PORT}`)
})
