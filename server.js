const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("working edited")
})

app.listen(5001, ()=>{
    console.log("listening on 5001")
})