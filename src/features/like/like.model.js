
export default class LikeModel{
    constructor(id,userId,postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }
    static getAllLike(userId,postId){
        let post=likeArr.find((post)=>post.userId==userId&&post.postId==postId);
        if(post!=-1)
            return post;
        else
        return false;
        
    }
   static addLike(userId,postId)
    {
        let post=likeArr.find((post)=>post.userId==userId&&post.postId==postId);
        if(post!=-1)
            {
                ++post.like;
                return post;
            }
        else
        return false;
        
    
    }
    static removeLike(userId,postId)
    {
        let post=likeArr.find((post)=>post.userId==userId&&post.postId==postId);
        if(post!=-1)
            if(post.like>0)
            {--post.like;
                return post;}
            else
            return false;
       
    }

}

let likeArr=[{
    id:1,
    userId:1,
    postId:1,
    like:0
}]

