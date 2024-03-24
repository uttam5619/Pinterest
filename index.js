import { config } from "dotenv";
config()
import { app } from './app.js'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors'
import connectDB from "./src/config/db.config.js";
import {v2 as cloudinary} from 'cloudinary';

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET_TOKEN 
});

connectDB()

app.listen(PORT, ()=>{
    console.log(`server listening on localhost:${PORT}`)
})

