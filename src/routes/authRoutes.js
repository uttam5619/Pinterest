import express from 'express';
import { signUp, signIn, logOut } from '../controllers/auth.controller.js';
import { upload } from '../middleware/user.multer.middleware.js';
const authRouter = express.Router()

authRouter.post('/signUp',upload.single('avatar'),signUp)
authRouter.post('/signIn',signIn)
authRouter.post('/logOut',logOut)


export default authRouter