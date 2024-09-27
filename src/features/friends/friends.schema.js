import mongoose from 'mongoose';

const friendSchema=new mongoose.Schema({
    
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    friendId:{type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    toggleFriends:Boolean


})
export default friendSchema;