import jwt from "jsonwebtoken";


export const verifyToken = async (req, res, next) =>{
    try{
        let k=token = req.header("Authorization");

        if(!token){
            return res.staus(403).send("Access Denied");
        }

        if(token.startsWith("Bearer ")){
            token = token.slice(7, token, length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch{
        res.status(500).json({error : err.message});
    }
}