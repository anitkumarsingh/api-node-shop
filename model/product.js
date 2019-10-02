const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    product_name:String,
    price:Number
})

module.exports = mongoose.model("Product",ProductSchema);