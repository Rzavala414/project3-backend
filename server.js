var express = require('express');
//using express-session to enable session storage for our server
// var session = require("express-session");
const mongoose = require("mongoose");
//access for all our routes
var allRoutes = require('./controllers');
const cors = require('cors');
require('dotenv').config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//imports entire controllers folder, we will handle moularization there

// Requiring our models for syncing
// var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: ["https://rzavala414.github.io/Project3/", "http://localhost:3000"],
    credentials: true
}));

//allows express to use our routes
// app.usne(allRoutes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cribsmack", { useUnifiedTopology: true, useNewUrlParser: true  });

app.listen(PORT, function () {
    console.log(`app listening on http://localhost:${PORT}`)
})