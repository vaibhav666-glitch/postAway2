import mongoose from "mongoose";
import { postSchema } from "./post.schema.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";

const postModel= mongoose.model('Post',postSchema)

export default class PostRepository{
    async getAllPost(){
        try{
            const posts= await postModel.find();
            return posts;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something went wrong with the database",500)

        }
    }

    async getUserPost(userId){
        try{
            
            const posts= await postModel.find({userId: userId})
            return posts;
        }
        catch(err){
            console.log(err);
            
            
        }
    }
    async getPostById(id,userId){
        try{
            const posts= await postModel.findOne(id,userId)
            return posts;
        }
        catch(err){
            console.log(err);
           
            
        }
    }


    async addPost(postObj){
        try{
            const posts= new postModel(postObj);
            await posts.save();
            return posts;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something went wrong with the database",500)
            
        }
    }


    async updatePost(id, postObj)
    {
        try{
        const post = await postModel.find({_id:id,userId:userId});
        if(post)
            {
                post.caption = postObj.caption;
                post.imageUrl = postObj.imageUrl;
                await post.save();
                return post;

            }
        }
            catch(err){
                console.log(err);
                throw new ApplicationError('post not found', 404);
               
            }
    
    }
    async deletePost(id,userId)
    {
        try{
        const post = await postModel.findOne({_id:id,userId:userId});
       console.log(post);
        if(post)
            {
                await post.remove();
                return true;
                

            }
            else{
                throw new ApplicationError('post not found', 404);
                
            }
        }
        catch(err){
            console.log(err);
            throw new ApplicationError('post not found', 404);
        }

    }
}