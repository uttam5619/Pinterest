import mongoose from 'mongoose'

const connectDB =()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then((e)=>{
        console.log(`connection established with database ${e.connection.host}`)
    }).catch((err)=>{
        console.log(` failed to connect to database ${err.message}`)
        process.exit(1)
    })
}

export default connectDB