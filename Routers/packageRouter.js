const express=require("express");
const app=express();
const router=express.Router

const packageController=require("../Controllers/packageController.js")

app.post("/addPackage",packageController.addPackage)
app.get("/findPackage/:id",packageController.findPackage)

console.log("PackageRouter Connected");
module.exports=app