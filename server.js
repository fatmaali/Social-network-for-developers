const express=require("express");
const app=new express();
app.get("/test",(req,res)=>res.send("test 3sss33"));
const port = process.env.PORT||  3000;
app.listen(port,()=>{console.log(`ffffffff  ${port}` )});