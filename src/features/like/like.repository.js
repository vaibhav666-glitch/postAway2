import mongoose from "mongoose";
import likeSchema from "./like.schema.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";

const likeModel= mongoose.model("like",likeSchema);

export default class LikeRepository{
    async addLike(obj){
        try{
                const like= new likeModel(obj);
                await like.save();
                return like;
        }
        catch(err)
        {
            console.log(err);
            throw new ApplicationError("Something is wrong with database",501);
        }
    }

    async countLikeForPost(postId)
    {
        try{
            const totalLike=await likeModel.find({postId:postId})
            return totalLike.length;
        }
        catch(err)
        {
            throw new ApplicationError("Something is wrong with database", 501);
        }
    }

    async toggleLike(userId,postId){
        try{
            const like=await likeModel.findOneAndDelete({userId:userId,postId:postId},{new:true});
            return like;
          
        }
        catch(err){
            throw new ApplicationError("Something is wrong with database",501);
        }
    }

}