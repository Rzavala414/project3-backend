const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cribsmack"
);

const userSeeds = [
    {username: "Dan",
     password: "password",
     email: "dan@dan.com",
     wins: 55,
     losses:45,
     playAvg:3.55,
     countAvg:8.11,
     cribAvg: 4.75,
     skunks: 8,
     skunked: 2
    },
    {username: "Joe",
     password: "password",
     email: "joe@joe.joe",
     wins: 55,
     losses:45,
     playAvg:3.55,
     countAvg:8.11,
     cribAvg: 4.75,
     skunks: 8,
     skunked: 2
    },
    {username: "Chris",
     password: "password",
     email: "chris@@dan.com",
     wins: 42,
     losses:45,
     playAvg:3.00,
     countAvg:7.95,
     cribAvg: 4.0,
     skunks: 1,
     skunked: 4
    },
    {username: "Rogelio",
     password: "password",
     email: "rogelio@dan.com",
     wins: 20,
     losses:15,
     playAvg:2.55,
     countAvg:7.11,
     cribAvg: 3.75,
     skunks: 1,
     skunked: 2
    },
    {username: "Eric",
     password: "password",
     email: "eric@dan.com",
     wins: 35,
     losses:34,
     playAvg:3.35,
     countAvg:8.01,
     cribAvg: 4.33,
     skunks: 3,
     skunked: 3
    }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
