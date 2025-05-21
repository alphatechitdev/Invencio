import express from "express";
import { verifyToken } from "../Middleware/tokenWork.ts";
import CustomRequest from "./protected.type.ts";


const ProtectedEndpoint = express.Router();



ProtectedEndpoint.get('/protected-route', verifyToken, (req:CustomRequest, res) => {
    const username = req.user;
    res.status(200).json({success:true, user_name:username});
});

export default ProtectedEndpoint;


