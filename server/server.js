const express = require("express");
const connectDb=require("./config/dbConnection");
const errorHandler=require("./middleware/errorHandler");
const cors = require("cors");

//env  file config
const dotenv =require("dotenv");
dotenv.config();


connectDb();
const app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
//Error handling middlewares
app.use(errorHandler);


//ROUTES BELOW
app.get('/',(req,res)=>{
    res.send("working");
});


//APP CONFIG START
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
})
