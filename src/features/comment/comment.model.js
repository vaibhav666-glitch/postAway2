
export default class CommentModel{
    constructor(id,userId,content,imageUrl){
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.imageUrl = imageUrl;

    }
    
    

    static getCommentById(id,userId){
        const comment = postArr.find((comment)=>comment.id==id&&comment.userId==userId);
        return comment;
    }

    static addComment(postObj)
    {
        const newComment= new CommentModel(postArr.length+1,postObj.userId,postObj.content,postObj.imageUrl);
        postArr.push(newComment);
        return newComment;
    }

    static updateComment(id, postObj)
    {
        const comment = postArr.find((comment)=>comment.id==id&&postObj.userId==comment.userId);
        if(comment)
            {
                comment.content = postObj.content;
                return comment;

            }
            else{
                return null;
            }
    }

    static deleteComment(id,userId)
    {
        console.log(id+" "+ userId);

        const comment = postArr.findIndex((comment)=>comment.id==id && userId==comment.userId);
       console.log(comment);
        if(comment!=-1)
            {
            
                postArr.splice(comment,1);
                return true;

            }
            else{
                return false;
            }


    }


} 
let postArr=[{
    id:1,
    userId:1,
    content:"Nice pp",
    imageUrl:"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}]