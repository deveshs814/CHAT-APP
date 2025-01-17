import express from "express"
import authRoutes from './routes/authRoute.js'
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser'
import messageRoutes from './routes/messageRoute.js'
import cors from 'cors';

const app = express();
dotenv.config()

const port = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

app.listen(port,() =>{
    console.log(`Server is running on port ${process.env.PORT}`)
    connectDB();
})