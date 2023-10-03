const mongoose=require("mongoose")
const schema=mongoose.Schema

const cabSchema= new schema({
    cabid: "String",
    cabname:"String",
    cabphone:"String",
    cabaddress:"String",
    cabcityname:"String",

},{timestamps:true})

const cab=mongoose.model("cabs",cabSchema)
module.exports=cab

