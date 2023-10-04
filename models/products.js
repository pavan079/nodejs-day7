const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId =Schema.ObjectId;

const products = new Schema({
    id:ObjectId,
    productName:{type:String,required:true},
    productPrice:{type:Number,required:true},
    productDescription:{type:String,required:true},
    date:{type: String}
})

module.exports = mongoose.model('products',products,'products')