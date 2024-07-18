import express from "express"
import CommentController from "./comment.controller.js";

const CommentRouter=express.Router();
const commentController= new CommentController();

CommentRouter.get("/:id/:id2",commentController.getUserCommentById);
CommentRouter.post("/",commentController.addComment);
CommentRouter.put("/:id",commentController.updateComment);
CommentRouter.delete("/:id/:id2",commentController.deleteComment);

export default CommentRouter;