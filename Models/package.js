const mongoose=require("mongoose")
const schema=mongoose.Schema

const packageSchema= new schema({
    packageid: "String",
    packagename:"String",
    packagecity:"String",
    packagedescription:"String",
    packageitenary:"String",
    packageprice:"Number"

},{timestamps:true})

const package=mongoose.model("packages",packageSchema)
module.exports=package