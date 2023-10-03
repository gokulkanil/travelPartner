const express=require("express");
const app=express();
const router=express.Router

const destinationController=require("../Controllers/destinationController.js")

app.post("/addDest",destinationController.addDest)
app.get("/findDest",destinationController.findDest)

console.log("DestinationRouter Connected");
module.exports=app