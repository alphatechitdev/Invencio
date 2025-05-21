import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { Response, NextFunction} from 'express';
import CustomRequest from '../Routes/protected.type.ts';

export const generateToken = (payload:Object) => {
    return jwt.sign(payload, process.env.JWTSECRET!, { expiresIn: '24h' });
  };

export const verifyToken  = (req:CustomRequest, res:Response, next:NextFunction) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: 'No token, authorization' });

    jwt.verify(token, process.env.JWTSECRET!, (err:VerifyErrors | null, decoded:JwtPayload|string|undefined) => {
      if (err) return res.status(401).json({ msg: 'Invalid token' });
      req.user = decoded;
      next();
    });
  }


