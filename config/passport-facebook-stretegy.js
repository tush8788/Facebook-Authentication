const passport=require('passport');
const facebookStategy=require('passport-facebook').Strategy;
const UserDB=require('../models/user');
const dotenv=require('dotenv').config();

passport.use(new facebookStategy({
    clientID:process.env.clientID,
    clientSecret:process.env.clientSecret,
    callbackURL:process.env.callbackURL,
    profileFields:['email','name','displayName','photos']
},async function(accessToken, refreshToken, profile, done){
    // console.log(profile);
    try{
        let user=await UserDB.findOne({facebookId:profile.id});
        if(!user){
            user=await UserDB.create({facebookId:profile.id,name:profile.displayName});
        }
       return done(null,user);
    }
    catch(err){
        done(err);
        console.log(err);
    }
}))

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser( async (id,done)=>{
    try{
        let user=await UserDB.findById(id);
        done(null,user);
    }
    catch(err){
        console.log(err);
        done(err);
    }
})

module.exports=passport;