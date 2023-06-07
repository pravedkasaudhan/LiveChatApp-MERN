const express= require('express');
require('dotenv').config();
const {chats}=require('./backend/data/data')

const app=express();

const PORT=process.env.PORT;
console.log(process.env.PORT);

app.get("/",(req,res)=>{
    res.send('APP API ACTIVE');
})

app.get("/api/chat",(req,res)=>{
    // console.log(chats);
res.send(chats);
})

app.get("/api/chat/:id",(req,res)=>{
    console.log("person chat fetch");
    const personChat=chats.find((chat)=>chat._id===req.params.id);
    res.send(personChat);
})


app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`));