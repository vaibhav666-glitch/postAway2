import { ApplicationError } from "../../errorHandler/applicationError.js";

import PostRepository from "./post.repository.js";

export default class PostController{
   constructor(){
      this.postRepository=new PostRepository();
   }
    async getAllPost(req,res){
      try{
         let posts=await this.postRepository.getAllPost();
        res.status(200).send(posts);
      }
      catch(err){
         console.log(err);
         throw new ApplicationError("No post found",400);
      }
        

    }

   async getUserPost(req,res){
       try{
        
         let posts= await this.postRepository.getUserPost(req.params.id);
         res.status(200).send(posts);
       }
       catch(err){
         
         res.status(404).send(err.message);
         throw new ApplicationError("no user and its post found",400);
       }
        
        
    }
     async getUserPostById(req,res){
      try{
        let post=await this.postRepository.getPostById(req.params.id,req.params.id2);
        res.status(200).send(post);
      }
      catch(err){
         console.log(err);
         throw new ApplicationError("no post found",400);
      }
     }

     async addPost(req,res){
      const{userId,caption}=req.body;
      const newPost={userId,caption,imageUrl:req.file.filename}
      try{
       await this.postRepository.addPost(newPost);
        res.status(200).send(newPost);
      }
      catch(err){
         console.log(err);
         throw new ApplicationError("something went wrong with database",400);
      }
     }

    async updatePost(req,res){
      try{
         const{caption}=req.body;
      const newPost={caption,imageUrl:req.file.filename}
        let updatePost=await this.postRepository.updatePost(req.params.id,newPost);
        res.status(200).send(updatePost);
      }
      catch(err){
         console.log(err);
         throw new ApplicationError("something went wrong with database",400);
      }
     }
    async deletePost(req,res){
        try{
         let deletePost=await this.postRepository.deletePost(req.params.id,req.params.id2);
        res.status(200).send(deletePost);
        }
        catch(err){
         console.log(err);
         throw new ApplicationError("something went wrong with database",400);
        }
     }
}