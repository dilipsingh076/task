import  userRoutes from "./Routes/users.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())


app.use("/",userRoutes)


app.get("/",(req,res)=>{
    res.send("hello express")
})

app.all("*",(req,res)=>{res.send("that routes doesn't exist")})


app.listen(5050,()=>{
    console.log("server is running on prot 5050");
})