const http=require('http');

const express =require('express');

const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the server</h1>")
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})




  
