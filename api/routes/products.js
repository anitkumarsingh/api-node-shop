const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Its a get request to Product resource'
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Post request to Product resource'
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