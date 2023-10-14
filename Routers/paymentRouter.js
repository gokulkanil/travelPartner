const express=require("express");
const app=express();
const router=express.Router

const paymentController=require("../Controllers/paymentController.js")

app.post("/payment",paymentController.payment)
app.post("/addCard",paymentController.addCard)


console.log("PaymentRouter Connected");
module.exports=app