import { ApplicationError } from "../../errorHandler/applicationError.js";

import CommentRepository from "./comment.repository.js";

export default class CommentController{
   constructor(){
      this.commentRepository=new CommentRepository
   }
 
    async getUserCommentById(req,res){
      try{
         const comment =await this.commentRepository.getComment(req.params.postId);
         res.status(200).json(comment);
      }
      catch(err){
        console.log(err)
        throw new ApplicationError("post is not found",401);
     }
   }
   async addComment(req,res){
      try{
         const comment =await this.commentRepository.createComment(req.body);
         res.status(200).json(comment);
      }
      catch(err){
         console.log(err)
         throw new ApplicationError("post is not found",401);
      }
        
     }
    async updateComment(req,res){
       try{
         const comment =await this.commentRepository.updateComment(req.body);
         res.status(200).json(comment);
       }
       catch(err){
         console.log(err)
         throw new ApplicationError("post is not found",401);
       }

     }
     async deleteComment(req,res){
       try{
         const comment =await this.commentRepository.deleteComment(req.params.id);
         res.status(200).json(comment);
      }
      catch(err){
         console.log(err)
         throw new ApplicationError("post is not found",401);
      }

     }
}