const mongoose=require("mongoose")
const schema=mongoose.Schema

const cardSchema=new schema({
    cardNo: Number,
    PIN: Number,
    balance: Number
},{timestamps:true});

const card=mongoose.model("cards",cardSchema)
module.exports=card;