import express from 'express'
import UserController from './user.controller.js';



const UserRouter=express.Router();
const userController= new UserController();
UserRouter.get("/",userController.getAllUser);
UserRouter.post("/add",userController.postUser);
UserRouter.post("/login",userController.postLogin);

export default UserRouter;

