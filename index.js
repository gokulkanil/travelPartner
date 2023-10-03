const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");
const userRouter=require("./Routers/userRouter")
const hotelRouter=require("./Routers/hotelRouter")
const cabRouter=require("./Routers/cabRouter")
const destinationRouter=require("./Routers/destinationRouter")
const packageRouter=require("./Routers/packageRouter")


const PORT=process.env.PORT||5000
dotenv.config();
const connectDB=require("./Config/db")

connectDB();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/api/user",userRouter)
app.use("/api/hotel",hotelRouter)
app.use("/api/cab",cabRouter)
app.use("/api/destination",destinationRouter)
app.use("/api/package",packageRouter)



app.listen(PORT,()=>console.log("listening on port"+PORT))