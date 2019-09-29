const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json('Get request to the order resource');
})
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Post request to order'
    })
})

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Order deleted successfuly!'
    })
})

module.exports = router;