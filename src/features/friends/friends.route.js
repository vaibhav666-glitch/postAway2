import express from 'express'

import FriendController from './friends.controller.js'

const FriendRouter= express.Router();

const friendController= new FriendController;

FriendRouter.put('/:id1/:id2',(req,res)=>friendController.acceptRequest(req,res));
FriendRouter.post('/:id1/:id2',(req,res)=>friendController.addFriend(req,res));
FriendRouter.delete('/:id1/:id2',(req,res)=>friendController.rejectRequest(req,res));
FriendRouter.delete('/:id1/:id2',(req,res)=>friendController.removeFriend(req,res));
FriendRouter.get('/:id1',(req,res)=>friendController.showPendingRequest(req,res));
FriendRouter.get('/:id1',(req,res)=>friendController.showAllFriends(req,res));

export default FriendRouter;

