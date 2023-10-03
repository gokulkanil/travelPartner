const express=require("express");
const app=express();
const router=express.Router

const hotelController=require("../Controllers/hotelController.js")

app.post("/addHotel",hotelController.addHotel)
app.get("/findHotels",hotelController.findHotels)

console.log("hotelRouter Connected");
module.exports=app