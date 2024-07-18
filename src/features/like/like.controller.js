import LikeModel from "./like.model.js";

export default class LikeController{

    getAllLike(req,res){
        let post=LikeModel.getAllLike(req.params.id,req.params.id2);
        res.status(200).send(post);
    }

    addLike(req,res){
        let post=LikeModel.addLike(req.params.id,req.params.id2);
        res.status(200).send(post);
    }

    removeLike(req,res){
        let post=LikeModel.removeLike(req.params.id,req.params.id2);
        res.status(200).send(post);
    }

}