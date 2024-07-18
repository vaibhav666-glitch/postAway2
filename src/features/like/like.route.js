
import express from 'express'
import LikeController from './like.controller.js';

const LikeRouter=express.Router();

const likeController=new LikeController;
LikeRouter.get("/:id/:id2",likeController.getAllLike);
LikeRouter.post("/:id/:id2",likeController.addLike);
LikeRouter.delete("/:id/:id2",likeController.removeLike);




export default LikeRouter;