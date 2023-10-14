const express=require("express");
const app=express();
const router=express.Router

const cartController=require("../Controllers/cartController.js")

app.post("/addToCart",cartController.addToCart)
app.get("/viewCart",cartController.viewCart)
app.put("/deletePackage",cartController.deletePackage)

console.log("cartRouter Connected");
module.exports=app