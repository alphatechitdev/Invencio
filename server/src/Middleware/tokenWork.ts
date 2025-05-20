import jwt from 'jsonwebtoken';


export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWTSECRET!, { expiresIn: '24h' });
  };

export const verifyToken  = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: 'No token, authorization' });

    jwt.verify(token, process.env.JWTSECRET!, (err, decoded) => {
      if (err) return res.status(401).json({ msg: 'Invalid token' });
      req.user = decoded;
      next();
    });
  }


