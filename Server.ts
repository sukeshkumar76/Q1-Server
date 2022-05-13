import express from "express";

import  data from './data'
const app=express();

let State:any[]=data;

app.get("/",(req,res)=>{
    res.json(State);
})

app.put("/:id",(req,res)=>{
    State.map(item=>{
        if(item._id===req.params.id){
            item=req.body
        }
        return item;
    })
    res.json(State);
})
app.delete("/:id",(req,res)=>{
    State=State.filter(item=>{
        if(item._id!==req.params.id){
            return item;
        }
    })
    res.json(State);
})
app.post("/",(req,res)=>{
State.push(req.body)
    res.json(State);
})

app.listen(2000,()=>{
    console.log(`server listening...`);
    
})