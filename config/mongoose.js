const mongoose=require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb://localhost/facebook-auth');

const db=mongoose.connection;

db.on('error',()=>{ console.log("Error in connect DB") });

db.once('open',()=>{ console.log("Successfully connected to db")});

module.exports=db;