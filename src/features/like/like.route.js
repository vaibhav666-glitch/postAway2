
import express from 'express'
import LikeController from './like.controller.js';

const LikeRouter=express.Router();

const likeController=new LikeController;
LikeRouter.get("/:id",(req,res)=> likeController.getPostLike(req,res));
LikeRouter.post("/:id/:id2",(req,res)=>likeController.addLike(req,res));
LikeRouter.delete("/:id/:id2",(req,res)=>likeController.removeLike(req,res));




export default LikeRouter;