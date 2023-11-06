const express=require("express");
const app=express();
const router=express.Router

const packageController=require("../Controllers/packageController.js")

app.post("/addPackage",packageController.addPackage)
app.post("/findPackage",packageController.findPackage)

console.log("PackageRouter Connected");
module.exports=app