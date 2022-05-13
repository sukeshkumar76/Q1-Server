import express from "express";

import  data from './data'
const app=express();
app.use(express.json());

let State:any[]=data;

app.get("/",(req,res)=>{
    res.json(State);
})

app.put("/:id",(req,res)=>{
    
    State.map(item=>{
        if(item._id===req.params.id){
            item=req.body
            console.log(req.body); 
        }
        return item;
    })
    res.json(req.body);
})

app.delete("/:id",(req,res)=>{
    State=State.filter(item=>{
        if(item._id!==req.params.id){
            return item;
        }
    })
    res.json({message:`Deleted Successfully`});
})

app.post("/",(req,res)=>{    
State.push(req.body)
    res.json(req.body);
})

app.listen(2000,()=>{
    console.log(`server listening...`);
    
})