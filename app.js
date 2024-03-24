import express from 'express'
import authRouter from './src/routes/authRoutes.js'
import feedRouter from './src/routes/feedRoutes.js'
const app = express()


app.use(express.json({limit:'20kb'}))
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/feed',feedRouter)

app.get('/api/v1/', (req, res, next)=>{
    res.status(200).json({success: true, message: `welcome to pinterest`})
})



app.get('*', (req, res, next)=>{
    res.status(404).json({ success: false, message:`OOPS! resource not found`})
})


export { app }