import express from "express"
import PostController from "./post.controller.js";
import { uploadFile } from "../../middleware/fileUpload.middleware.js";

const PostRouter=express.Router();
const postController= new PostController();
PostRouter.get("/",postController.getAllPost);
PostRouter.get("/:id",postController.getUserPost);
PostRouter.get("/:id/:id2",postController.getUserPostById);
PostRouter.post("/",uploadFile.single('imageUrl'), postController.addPost);
PostRouter.put("/:id",postController.updatePost);
PostRouter.delete("/:id/:id2",postController.deletePost);

export default PostRouter;