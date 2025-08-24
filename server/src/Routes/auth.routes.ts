import express from 'express';
import {generateToken, verifyToken } from '../Middleware/tokenWork.ts';
import UserController from '../Controllers/user.controller.ts';

const AuthEndpoint = express.Router();


AuthEndpoint.post('/Register', async (req, res) => {
    try {
        const {creds} = req.body;
        const UC = new UserController();
        const result = await UC.Register(creds);
        if(!result.success) {
            res.status(400).json({success:false});
        } else {
            res.status(200).json({success:true});
        }

    } catch (error) {
        console.log("Error in Register Function/Endpoint, ", error);
        res.status(500).json({success:false});
    }
});

AuthEndpoint.post('/Login', async (req, res) => {
    try {
        const {creds} = req.body;
        const UC = new UserController();
        const result = await UC.Login(creds);
        if(!result.account) {
            res.status(404).json({success:false, account:false});
        } else {
            if (!result.success) {
                res.status(400).json({success:false});
            } else {
                const token = generateToken({username:creds.username});
                res.cookie('token', token, {
                    httpOnly: true,
                    sameSite:'strict',
                    secure:false,
                    maxAge: 3600000
                });
                res.status(200).json({success:true});
            }
        }

    } catch (error) {
        console.log("Error in Login Function/Endpoint, ", error);
        res.status(500).json({success:false});
    }
});

export default AuthEndpoint;