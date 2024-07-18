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

const server=express();

//server.use(express.static('public'));


server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use("/api/user",UserRouter);
server.use("/api/post",jwtAuth, PostRouter);
server.use("/api/comment",jwtAuth,CommentRouter);
server.use('/api/like',jwtAuth,LikeRouter);

server.use((err, req, res, next)=>{
    console.log(err);
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }

    // server errors.
    res.status(500).send("Something went wrong, please try again later")
})


server.listen(3200,()=>{
    console.log("server is running on port 3200");
    connectUsingMongoose();
})