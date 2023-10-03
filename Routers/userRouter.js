const express=require("express");
const app=express();
const router=express.Router

const userController=require("../Controllers/userController.js")

app.post("/addUser",userController.addUser)
app.post("/login",userController.login)

console.log("userRouter Connected");
module.exports=app