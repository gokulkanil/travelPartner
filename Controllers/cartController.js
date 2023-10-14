const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const cart=require("../Models/cart")

exports.addToCart= async(req,res)=>{
    console.log("In add to cart");

const packageid=req.body.packageid;
const packagename=req.body.packagename
const packageprice=parseInt(req.body.packageprice)
const qty=parseInt(req.body.qty)
const total=parseInt(req.body.total)
console.log(packageid,packagename,packageprice,qty,total);
try {
    const data = await cart.findOne({packageid:packageid})
    if(data){
        console.log("exist");
        const newQty=parseInt(data.qty)+qty
        const newTotal=newQty*parseInt(data.packageprice)
        const newData= await cart.updateOne({packageid:packageid},{$set:{qty:newQty,total:newTotal}})
        res.status(200).send(newData)
        console.log("Package added to cart")
    }else{
        console.log("doesn't exist");
        const newData=await cart.create({
            packageid:packageid,
            packagename:packagename,
            packageprice:packageprice,
            qty:qty,
            total:total
        })
        res.status(200).send(newData)
    }
} catch (error) {
    res.status(500).send(error)
    console.log(error);
}
}

exports.viewCart= async(req,res)=>{
    console.log("In viewCart");
    try {
        const data=await cart.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
        
    }
}

exports.deletePackage=async(req,res)=>{
    console.log("In deletePackage");
    const packageid=req.body.packageid
    const package=await cart.findOne({packageid:packageid})
    const newQty=package.qty-1;
    
    
    try{
        if(newQty<1){
            data1=await cart.deleteOne({packageid:packageid})
        }
        else{
    data1=await cart.updateOne({packageid:packageid},{$set:{qty:newQty,total:newQty*package.packageprice}})
        }
    const data= await cart.find()
    res.status(200).send(data)
        
    }
    catch(error){
        res.status(500).send(error)
        console.log(error);
    }
}