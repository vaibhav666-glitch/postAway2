import { ApplicationError } from "../../errorHandler/applicationError.js";

import LikeRepository from "./like.repository.js";

export default class LikeController{

    constructor(){
        this.likeRepository=new LikeRepository();

    }
    async getPostLike(req,res){
        try{
            let post=await this.likeRepository.countLikeForPost(req.params.id);
            res.status(200).send(post);
        }
        catch(err){
            throw new ApplicationError("something wrong with controller", 400);
        }
       
    }

   async addLike(req,res){
    try{
        let post=await this.likeRepository.addLike({postId:req.params.id,userId:req.params.id2});
        res.status(200).send(post);
    }
    catch(err){
        throw new ApplicationError("something wrong with controller", 400);
    }
       
    }

    async removeLike(req,res){
        try{
            let post=await this.likeRepository.toggleLike(req.params.id,req.params.id2);
            res.status(200).send(post);
        }
        catch(err){
            throw new ApplicationError("something wrong with controller", 400);
        }
       
    }

}