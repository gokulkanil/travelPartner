const mongoose=require("mongoose")

const connectDB= async()=>{
    try{
        const uri="mongodb://127.0.0.1:27017/travelPartner";
        const conn=await mongoose.connect(uri,{
            useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("MongoDB Connected");
    }catch(error){
        console.log(error);
    }
}
module.exports=connectDB;