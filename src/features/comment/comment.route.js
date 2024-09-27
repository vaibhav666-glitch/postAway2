import express from "express"
import CommentController from "./comment.controller.js";

const CommentRouter=express.Router();
const commentController= new CommentController();

CommentRouter.get("/:id",(req,res)=>commentController.getUserCommentById(req,res));
CommentRouter.post("/",(req,res)=>commentController.addComment(req,res));
CommentRouter.put("/:id",(req,res)=>commentController.updateComment(req,res));
CommentRouter.delete("/:id/:id2",(req,res)=>commentController.deleteComment(req,res));

export default CommentRouter;