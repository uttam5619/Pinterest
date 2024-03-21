import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    minLength: [3, `the name should contain atleast 3 characters`],
    maxLength: [50, `the name should contain atmost 50 characters`],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength:[8, `the password should contain atleast 8 characters`],
    maxLength:[40, `the password should contain atmost 40 characters`],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  avatar: {
    type: String
    
  }
});

const User = mongoose.model('User', UserSchema);

UserSchema.pre('save', async function(next){
  if (!this.isModified(`password`)) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

UserSchema.methods ={
  generateAccessToken: async function (){
    return await jwt.sign(
      {id:this._id, username:this.username, email: this.email},
      process.env.ACCESS_SECRET_TOKEN,
      {expiresIn:'5m'}
    )
  }
}

export default User 


