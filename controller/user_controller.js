module.exports.profile=function(req,res){
    if(!req.user){
        return res.redirect('/');
    }
    // console.log(req.user)
    return res.render('profile',{title:"profile",user:req.user})
}

module.exports.createSession=function(req,res){
    return res.redirect('/user/profile');
}

module.exports.signOut=function(req,res){
    req.logout((err)=>{})
    return res.redirect('/');
}