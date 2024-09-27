import { ApplicationError } from "../../errorHandler/applicationError.js";

import CommentRepository from "./comment.repository.js";

export default class CommentController{
   constructor(){
      this.commentRepository=new CommentRepository();
   }
 
    async getUserCommentById(req,res){
      try{
         const comment =await this.commentRepository.getComment(req.params.id);
         res.status(200).json(comment);
      }
      catch(err){
        console.log(err)
        throw new ApplicationError("post is not found",401);
     }
   }
   async addComment(req,res){
      try{
         console.log(req.body);
         const comment =await this.commentRepository.createComment(req.body);
         res.status(200).json(comment);
      }
      catch(err){
         console.log(err)
         throw new ApplicationError("comment is not found",401);
      }
        
     }
    async updateComment(req,res){
       try{
         console.log(req.body);
         const comment =await this.commentRepository.updateComment(req.body,req.params.id);
         res.status(200).json(comment);
       }
       catch(err){
         console.log(err)
         throw new ApplicationError("post is not found",401);
       }

     }
     async deleteComment(req,res){
       try{
         const comment =await this.commentRepository.deleteComment(req.params.id,req.params.id2);
         res.status(200).json(comment);
      }
      catch(err){
         console.log(err)
         throw new ApplicationError("post is not found",401);
      }

     }
}