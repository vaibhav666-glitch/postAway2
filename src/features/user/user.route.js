import express from 'express'
import UserController from './user.controller.js';



const UserRouter=express.Router();
const userController= new UserController();
UserRouter.get("/",(req,res)=>{userController.getAllUser(req,res)});
UserRouter.post("/add",(req,res)=>{userController.postUser(req,res)});
UserRouter.post("/login",(req,res)=>{userController.postLogin(req,res)});

export default UserRouter;

