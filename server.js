const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(5001, ()=>{
    console.log("listening on 5001")
})