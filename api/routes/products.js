const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../../model/product');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Its a get request to Product resource'
    })
})

router.post('/',(req,res,next)=>{
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        product_name:req.body.product_name,
        price:req.body.price
    })
    product.save()
           .then(result=>{
               console.log(result)
           })
           .catch(err=>console.log(err))
    res.status(201).json({
        message:'Product created successfully!',
        products:product
    })
})

router.get('/:productId',(req,res,next)=>{
    const id =req.params.productId;
    res.status(200).json({
        message:'Get request by Product Id',
        id:id
    })
})
router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message:'Delete request to the product resource',
        id:id
    })
})
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({message:'Product updated successfully!'})
})
module.exports = router;