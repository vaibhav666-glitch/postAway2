import express from "express"
import PostController from "./post.controller.js";
import { uploadFile } from "../../middleware/fileUpload.middleware.js";

const PostRouter=express.Router();
const postController= new PostController();
PostRouter.get("/",(req,res)=>{postController.getAllPost(req,res)});
PostRouter.get("/:id",(req,res)=>{postController.getUserPost(req,res)});
PostRouter.get("/:id/:id2",(req,res)=>{postController.getUserPostById(req,res)});
PostRouter.post("/",uploadFile.single('imageUrl'), (req,res)=>{postController.addPost(req,res)});
PostRouter.put("/:id",uploadFile.single('imageUrl'),(req,res)=>{postController.updatePost(req,res)});
PostRouter.delete("/:id/:id2",(req,res)=>{postController.deletePost(req,res)});

export default PostRouter;