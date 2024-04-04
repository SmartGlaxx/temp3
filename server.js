const express = require("express")
const app = express()

const productRouter = require("./routes/productRoutes")

app.use("/products", productRouter)
app.get("/",(req,res)=>{
    res.send("working edited again")
})


app.listen(5001, ()=>{
    console.log("listening on 5001")
})