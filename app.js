import express from 'express'
import authRouter from './src/routes/authRoutes.js'
const app = express()

app.use('/api/v1/auth',authRouter)

app.get('/api/v1/', (req, res, next)=>{
    res.status(200).json({success: true, message: `welcome to pinterest`})
})

app.get('*', (req, res, next)=>{
    res.status(404).json({ success: false, message:`OOPS! page not found`})
})

export { app }