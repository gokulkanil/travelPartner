const mongoose=require("mongoose")
const schema=mongoose.Schema

const hotelSchema=new schema({
    hotelid:'String',
    hotelname:'String',
    hotelcategory:'String',
    hotelphone:'String',
    totalrooms:'String',
    hoteladdress:'String',
    hotelcityname:'String',
    hoteldescription:'String'
},{timestamps:true});

const hotel=mongoose.model("hotels",hotelSchema)
module.exports=hotel;