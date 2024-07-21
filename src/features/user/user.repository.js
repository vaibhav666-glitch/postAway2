import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";

const userModel= mongoose.model('User',userSchema)

export default class UserRepository{
    async getAll(){
        try{
        const allUser= await userModel.find();
            return allUser;
    }
         catch(err){
            console.log(err)
            throw new ApplicationError("something went wrong with database", 500)
        
         }
    }
    async addUser(userObj){
        try{
        let user=await userModel.create(userObj);
        await user.save();
        return user;
        }
        catch(err){
            console.log(err)
            throw new ApplicationError("something went wrong with database", 500)
        }

    }

    async login(email,password)
    {
        try{
            const user=await userModel.findOne({email:email,password:password})
            return user;
        }
        catch(err){
            console.log(err)
            
        }
    }
}