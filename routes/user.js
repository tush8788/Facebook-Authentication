const express=require('express');
const router=express.Router();
const userController=require('../controller/user_controller');
const passport=require('passport');

router.get('/sign-in', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook',passport.authenticate('facebook',{failureRedirect:"/"}),userController.createSession);

router.get('/profile',userController.profile);

router.get('/sign-out',userController.signOut)

// router.get('/auth/github',passport.authenticate('github',{scope:['user:email']}));

// router.get('/auth/github/callback',passport.authenticate('github',{failureRedirect:'/'}),homeController.createSession);
module.exports=router;