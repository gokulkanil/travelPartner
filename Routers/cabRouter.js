const express=require("express");
const app=express();
const router=express.Router

const cabController=require("../Controllers/cabController.js")

app.post("/addCab",cabController.addCab)
app.get("/findcab/:id",cabController.findCab)

console.log("cabRouter Connected");
module.exports=app