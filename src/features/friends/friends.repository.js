import mongoose from "mongoose";
import friendSchema from "./friends.schema.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";


const friendModel=mongoose.model("Friends",friendSchema)

export default class FriendRepository{
    async addFriend(obj){
        try{
                let friend= new friendModel(obj);
                await friend.save();
                return friend;

        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something is wrong with database", 501);
        }
    }

    async acceptRequest(userId,friendId){
        try{
                let friend= friendModel.findOne({userId:userId,friendId:friendId},{new:true})
                friend.toggleFriend=true;
               
                return friend;

        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something is wrong with database", 501);
        }
    }
    async rejectRequest(userId,friendId){
        try{
                let friend= friendModel.findByIdAndDelete({userId:userId,friendId:friendId},{new:true})
                return friend;

        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something is wrong with database", 501);
        }
    }
    async showPendingRequest(userId){
        try{
            let friend= await friendModel.find({userId:userId,toggleFriends:false});
            return friend;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something is wrong with database", 501);
        }
    }
    async showAllFriends(userId){
        try{
            let friend= await friendModel.find({userId:userId,toggleFriends:true});
            return friend;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something is wrong with database", 501);
        }
    }
  
  
} 