const express=require('express');
const bodyParser=require('body-parser');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is up on port ${port}`);
})