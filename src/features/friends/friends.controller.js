import { ApplicationError } from "../../errorHandler/applicationError.js";
import FriendRepository from "./friends.repository.js";

export default class FriendController{
    constructor(){
        this.friendRepository = new FriendRepository();
    }
    async addFriend(req,res){
        try{
            
            const friend=await this.friendRepository.addFriend({userId:req.params.id1,friendId:req.params.id2,toggleFriends:false});
            res.status(200).send(friend);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something wrong with controller",501);
        }
    }
    async acceptRequest(req,res){
        try{
            
            const friend=await this.friendRepository.acceptRequest(req.params.id1,req.params.id2);
            res.status(200).send(friend);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something wrong with controller",501);
        }
    }
    async rejectRequest(req,res){
        try{
            
            const friend=await this.friendRepository.rejectRequest(req.params.id1,req.params.id2);
            res.status(200).send(friend);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something wrong with controller",501);
        }
    }
    async removeFriend(req,res){
        try{
            
            const friend=await this.friendRepository.rejectRequest(req.params.id1,req.params.id2);
            res.status(200).send(friend);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something wrong with controller",501);
        }
    }
    async showPendingRequest(req,res){
        try{
            
            const friend=await this.friendRepository.showPendingRequest(req.params.id1);
            res.status(200).send(friend);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something wrong with controller",501);
        }
    }
    async showAllFriends(req,res){
        try{
            
            const friend=await this.friendRepository.showAllFriends(req.params.id1);
            res.status(200).send(friend);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something wrong with controller",501);
        }
    }
}