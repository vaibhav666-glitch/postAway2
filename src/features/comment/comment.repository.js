import mongoose from "mongoose";
import { commentSchema } from "./comment.schema.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";

const commentModel= mongoose.model('Comment',commentSchema);

export default class CommentRepository{
    async createComment(commentObj){
        try{
        const comment = new commentModel(commentObj);
        return await comment.save();
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is wrong with database ",500)
        }
    }

    async getComment(postId){
        try{
            return await commentModel.find({postId:postId});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is wrong with database ",500)
        }
    }

    async updateComment(commentObj,id){
        try{
            console.log(commentObj,id);
            const updatedComment= await commentModel.findOneAndUpdate({_id:id},commentObj,{new:true} );  
            if (!updatedComment) {
                throw new ApplicationError("Comment not found", 404); // Custom error for not found
            }
            return updatedComment;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is wrong with database ",500)
        }
    }
    async deleteComment(userId,postId){
        try{
            return await commentModel.findOneAndDelete({userId:userId,postId:postId},{new:true});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is wrong with database ",500)
        }
    }
}