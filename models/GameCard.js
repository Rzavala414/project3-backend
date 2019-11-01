const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameCardSchema = new Schema({
 gameid: { type: Number, required: true },
 date: { type: Date, default: Date.now },
 userOne: {type:Schema.Types.ObjectId,ref:"User"},
 userTwo: {type:Schema.Types.ObjectId,ref:"User"},
 hands:[
     {
         userOnePlay:Number,
         userOneCount:Number,
         userOneCrib:Number,
         userTwoPlay:Number,
         userTwoCount:Number,
         userTwoCrib:Number

     }
 ]
});

const GameCard = mongoose.model("GameCard", gameCardSchema);

module.exports = GameCard;