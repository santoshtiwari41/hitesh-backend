import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    fullname:{
        type:String,
        required:true,
       
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
        
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref:'Video'
    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
    }
},
{
    timestamps:true
});

export const User=mongoose.model('User',userSchema);