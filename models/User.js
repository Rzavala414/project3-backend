//npm package import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    
        username: {
            type:STRING,
            required: true,
            unique:true
          },
        password: {
            type:STRING,
            required: true,
            validate:{
                len:[8]
            }
          },
        email: {
            type:STRING,
            required: true,
            unique:true
          },
        wins: {
            type:Number,
            required: true,
          },
        losses: {
            type:Number,
            required: true,
          },
        playAvg: {
            type:Number,
            required: true,
          },
        countAvg: {
            type:Number,
            required: true,
          },
        cribAvg: {
            type:Number,
            required: true,
          },
        skunks: {
            type:Number,
            required: true,
          },
        skunked: {
            type:Number,
            required: true,
          },
          games:[
              {
                type:Schema.Types.ObjectId,
                ref:"GameCard"
              }
          ]
    });

const User = mongoose.model("User", userSchema);

module.exports = User;