import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    fullname:String,
    username: String,
    password: String,
    email: String,
    phone: String,
}, {timestamps:true});

const user = mongoose.model('user', userSchema);

export default user;


