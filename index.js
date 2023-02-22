const express=require('express');
const bodyParser=require('body-parser');
const db=require('./config/mongoose')
const port=8000;
const passport=require('passport');
const facebookStategy=require('./config/passport-facebook-stretegy');
const expessSession=require('express-session');

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(expessSession({
    name:"id",
    secret:"faceBookAUTH",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is up on port ${port}`);
})