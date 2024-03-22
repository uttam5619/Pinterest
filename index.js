import { config } from "dotenv";
config()
import { app } from './app.js'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors'
import connectDB from "./src/config/db.config.js";

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

connectDB()

app.listen(PORT, ()=>{
    console.log(`server listening on localhost:${PORT}`)
})

