import express from "express"
import UserRouter from "./src/features/user/user.route.js"
import bodyParser from "body-parser";
import PostRouter from "./src/features/post/post.route.js";
import CommentRouter from "./src/features/comment/comment.route.js";
import LikeRouter from "./src/features/like/like.route.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import loggerMiddleware from "./src/middleware/logger.middleware.js";
import { ApplicationError } from "./src/errorHandler/applicationError.js";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import dotenv from "dotenv";
import FriendRouter from "./src/features/friends/friends.route.js";

dotenv.config();
const server=express();
const port=process.env.PORT || 3200;

server.use(express.static('public'));


server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use("/api/user",UserRouter);
server.use("/api/post", PostRouter);
server.use("/api/comment",CommentRouter);
server.use('/api/like',LikeRouter);
server.use('/api/friends',FriendRouter)



//  Middleware to handle 404 requests.
server.use((req, res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:3200/api-docs")
    })



server.use((err, req, res, next)=>{
    console.log(err);
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }

    // server errors.
    res.status(500).send("Something went wrong, please try again later")
})


server.listen(port,()=>{
    console.log("server is running on port 3200");
    connectUsingMongoose();
})