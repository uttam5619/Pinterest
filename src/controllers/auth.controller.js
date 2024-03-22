import User from "../models/user.model.js"


const cookieOptions={
    maxAge: 7*24*60*60*1000,
    httpOnly: true,
    secure: true,
}

const signUp = async (req, res, next)=>{
    const {name, email, password } = req.body
    if(!name || !email || !password){
        return res.status(200).json({success:true, message:`registered successfully`})
    }
    try{
        const doesUserAlreadyExist = await User.findOne({email})
        if(doesUserAlreadyExist){
            return res.status(400).json({success:false, message:`Already registered`})
        }
        const user = await User.create({username:name, email, password})
        user.save()
        const token = await user.generateAccessToken()
        res.cookie('token', token, cookieOptions)
        return res.status(201).json({success:true, message:`user successfully registered`,data:user})
    }catch(err){
        return res.status(400).json({success:false, message:err.message})
    }
}

const signIn =async (req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({success:false, message:`email and password are mandatory`})
    }
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success:false, message:`user does not exist`})
        }
        const verifiedPasswords = await user.isPasswordCorrect(password)
        if(verifiedPasswords==false){
            return res.status(400).json({success:false, message:`password does not matched`})
        }
        const loggedInUser = await User.findById(user._id).select('-password')
        const token = loggedInUser.generateAccessToken()
        res.cookie('token', token, cookieOptions)
        return res.status(200).json({success:true, data:user})
    }catch(err){

    }
}

const logOut =(req, res)=>{

}

export { signUp, signIn, logOut }