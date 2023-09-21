const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/health",(req,res)=>{
    res.send("i am healthy")
})


const server=app.listen(8080,()=>{
    console.log("server started")
})
module.exports=server