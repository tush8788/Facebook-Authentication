const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    facebookId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true});

let User =mongoose.model("User",userSchema);

module.exports=User;