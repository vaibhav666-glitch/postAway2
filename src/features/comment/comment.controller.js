import CommentModel from "./comment.model.js";

export default class CommentController{
   
 
     getUserCommentById(req,res){
        let comment=CommentModel.getCommentById(req.params.id,req.params.id2);
        res.status(200).send(comment);
     }

     addComment(req,res){
        let newComment=CommentModel.addComment(req.body);
        res.status(200).send(newComment);
     }
     updateComment(req,res){
        let updateComment=CommentModel.updateComment(req.params.id,req.body);
        res.status(200).send(updateComment);

     }
     deleteComment(req,res){
        let deleteComment=CommentModel.deleteComment(req.params.id,req.params.id2);
        res.status(200).send(deleteComment);

     }
}