//npm package import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')


const userSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  wins: {
    type: Number,
    // required: true,
  },
  losses: {
    type: Number,
    // required: true,
  },
  playAvg: {
    type: Number,
    // required: true,
  },
  countAvg: {
    type: Number,
    // required: true,
  },
  cribAvg: {
    type: Number,
    // required: true,
  },
  skunks: {
    type: Number,
    // required: true,
  },
  skunked: {
    type: Number,
    // required: true,
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "GameCard"
    }
  ]
});


userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null)
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;