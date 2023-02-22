const passport=require('passport');
const facebookStategy=require('passport-facebook').Strategy;
const UserDB=require('../models/user');

passport.use(new facebookStategy({
    clientID:1141094419937314,
    clientSecret:"247a322e25d3e6d143cb7fc2d7467dbf",
    callbackURL:"http://localhost:8000/user/auth/facebook",
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