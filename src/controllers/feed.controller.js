import Post from "../models/post.model.js";
import User from "../models/user.model.js";


const createFeed =async (req, res)=>{
    const feed= await Post.create({
        postText: 'hello world hello world',
        createdBy: '65fd8e728f8169b8ceb1c206'
    })
    const user= await User.findOne({_id:'65fd8e728f8169b8ceb1c206'}).populate('posts')
    user.posts.push(feed._id)
    user.save()
    return res.status(201).json({success: true,message:`feed created Successfully`,data: feed})
}

const updateFeed =(req, res)=>{

}

const getFeed =async (req, res)=>{
    const user= await User.findOne({_id:'65fd8e728f8169b8ceb1c206'}).populate('posts')
    return res.status(200).json({success:true, data:user})
}

const deleteFeed =(req, res)=>{

}

const getSubscribedFeeds =(req, res)=>{
    /* 
        here we will get all the subscribed feeds
        that we need to be rendered on the Home page.
    */
}

const getSuggestedFeeds =(req, res)=>{
    /* 
        here we will get all the suggested feeds
        that we need to be rendered on the Home page.
    */
}


export {
    createFeed,
    updateFeed,
    getFeed,
    deleteFeed,
}