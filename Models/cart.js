const mongoose=require("mongoose")
const schema=mongoose.Schema

const cartSchema= new schema({
    packageid: String,
    packagename:String,
    packageprice:Number,
    qty:Number,
    total:Number

},{timestamps:true})

const cart=mongoose.model("cart",cartSchema)
module.exports=cart