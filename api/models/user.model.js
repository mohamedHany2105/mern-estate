 import mongoose from "mongoose";
import { timeStamp } from "node:console";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      },
     
},
{
    timeStamp:true,
  });
const User= mongoose.model("user",userSchema);
 export default User;