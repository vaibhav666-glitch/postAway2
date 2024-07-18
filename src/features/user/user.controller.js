import UserModel from  "./user.model.js";
import jwt from "jsonwebtoken"

export default class UserController{
    getAllUser(req,res){
        let users= UserModel.getAll();
        res.status(200).send(users);
    }
    postUser(req,res){
        console.log(req.body);
        let newUser=UserModel.addUser(req.body);
        res.status(200).send(newUser);
    }

    postLogin(req,res){
        const {email,password}=req.body
        let user=UserModel.login(email,password);
        if(user)
        {
            const token=jwt.sign({userID:user.id, email:email},
                "ssLeF2gsR4ZanxkbRCk3ESgm7CUOKUL9",
            {expiresIn:"1h"})
            res.status(200).send(token);

        }
        else
        res.status(400).send("Invalid email or password");
    }

}