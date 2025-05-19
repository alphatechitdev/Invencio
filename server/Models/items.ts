import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    sku:String,
    name:String,
    quantity:Number,
    location:String,
    expiryDate:Date,
}, {timestamps:true});

const item = mongoose.model('Item', itemSchema);

export default item;

