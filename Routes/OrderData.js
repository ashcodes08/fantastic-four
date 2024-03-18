const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')
router.post('/orderData' , async(req,res)=>{
    let data = req.body.order_data
    // await data.splice(0,0,{Order_date:req.body.Order_date})
    //if email not present in local storage 
    let eId = await Order.findOne({'email' :req.body.email})
    console.log(eId)
    if(eId===null)
    {
        try{
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch(error){
            console.log(error.message)
            res.send("Server Error",error.message)
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
                })
                
        } catch(error){
            res.send("server error",error.message)
        }
    }
})
router.post('/myorderData' , async(req,res)=>{
    try{
        // console.log(Order)
        let myData=global.od;
        let filteredData = myData.filter(order => order.email === req.body.email);
        // console.log("Filtered order data:", filteredData);
        // res.json({orderData:filteredData})
        res.send(filteredData)
    }catch(error){
        res.send("server error",error.message)
    }
})
module.exports=router;