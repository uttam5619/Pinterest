import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

  postText: {
    type: String,
    required: true,
    lowercase: true
  },
  likes: {
    type: Array,
    default: []
  },
  totalLikes:{
    type: Number,
    default: 0
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  image: {
    publicId: {
      type: String,
      //required: true
    },
    url: {
      type: String,
      //required: true
    }
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Post = mongoose.model('Post', PostSchema);

export default Post
