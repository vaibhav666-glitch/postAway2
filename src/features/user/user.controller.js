
import jwt from "jsonwebtoken"
import UserRepository from "./user.repository.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";

export default class UserController{
    constructor(){
        this.userRepository=new UserRepository();
    }
   async getAllUser(req,res){
    try{
        let users= await this.userRepository.getAll();
        res.status(200).send(users);
    }
    catch(err){
        console.log(err);
        throw new ApplicationError("Users not found", 400);
    }
    }
    async postUser(req,res){
        
        try{
            let users= await this.userRepository.addUser(req.body);
            res.status(200).send(users);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something wrong with database", 500);
        }
    }

   async postLogin(req,res){
        const {email,password}=req.body
        try{
            let user= await this.userRepository.login(email,password);
            if(user)
                {
                    const token=jwt.sign({userID:user.id, email:email},
                        "ssLeF2gsR4ZanxkbRCk3ESgm7CUOKUL9",
                    {expiresIn:"1h"})
                    res.status(200).send(token);
        
                }
            
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Invalid email or password", 400);
        }
      
       
    }

}