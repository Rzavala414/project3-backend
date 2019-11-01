//npm package import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = ('bcrypt')


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

const User = mongoose.model("User", userSchema);

userSchema.pre('save', function(next) {
  userSchema.password = bcrypt.hashSync(userSchema.password, bcrypt.genSaltSync(10), null)
  next();
});

module.exports = User;