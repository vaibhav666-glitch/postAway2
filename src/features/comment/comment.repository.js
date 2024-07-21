import mongoose from "mongoose";
import { commentSchema } from "./comment.schema";
import { ApplicationError } from "../../errorHandler/applicationError";

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

    async updateComment(commentObj){
        try{
            return await commentModel.findOneAndUpdate({_id:commentObj.id},commentObj,{new:true} );  
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is wrong with database ",500)
        }
    }
    async deleteComment(commentId){
        try{
            return await commentModel.findOneAndDelete({_id:commentId});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is wrong with database ",500)
        }
    }
}