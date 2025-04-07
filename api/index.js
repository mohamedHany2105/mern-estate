import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./router/user.route.js"
import authRouter from './router/auth.route.js'
import cors from 'cors'
dotenv.config();

const app =express();


app.use(express.json())
app.use(express.urlencoded());
// app.use(cokkieParser())
app.use(cors({ origin: 'http://localhost:5173' }));
app.listen(3000,()=>{
    console.log("all run as wanted")
    
});
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('mongo connected successfully')
    }
).catch((error)=>{
    console.log("failed to connect to mongo db")
    console.log(error)
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"Internal server error"
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
}); 