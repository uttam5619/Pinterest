import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  commentedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postedOn:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  },
},{timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment
