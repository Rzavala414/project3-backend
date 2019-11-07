const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TODO: do we add userTwo as a reference???
const gameCardSchema = new Schema({
 date: { type: Date, default: Date.now },
 userOne: {type:Schema.Types.ObjectId,ref:"User"},
 userTwo: {type:Schema.Types.ObjectId,ref:"User"},
 userOnePlayAverage:Number,
 userOnePlayAverage:Number,
 userOneCountAverage:Number,
 userOneCribAverage:Number,
 userTwoPlayAverage: Number,
 userTwoCountAverage:Number,
 userTwoCribAverage:Number,
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