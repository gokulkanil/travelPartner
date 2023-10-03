const mongoose=require("mongoose")
const schema=mongoose.Schema

const destSchema= new schema({
    destid: "String",
    destname:"String",
    destcity:"String",
    destdescription:"String",
    desttiming:"String",
    destentryfee:"String",

},{timestamps:true})

const destination=mongoose.model("destinations",destSchema)
module.exports=destination
