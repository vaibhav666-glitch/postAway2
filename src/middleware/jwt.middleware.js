import jwt from 'jsonwebtoken'
const jwtAuth=(req,res,next)=>{
    const token=req.headers['authorization'];

    if(!token){
        return res.status(401).send({message:'Token not found'})
    }

    try{
        const payload=jwt.verify(token,"ssLeF2gsR4ZanxkbRCk3ESgm7CUOKUL9");
    console.log(payload);
    }
    catch(err){
        return res.status(401).send({message:'Invalid token'})
    }
    next();
}
export default jwtAuth;