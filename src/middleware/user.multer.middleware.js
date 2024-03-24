import multer from "multer"
import path from 'path'

const upload = multer({
    dest:'uploads/',
    limits: {fileSize:1024*1024*25},

    storage: multer.diskStorage({
        destination: 'uploads/',
        filename: (req, file, cb)=>{
            cb(null, file.originalname)
        }
    }),

    fileFilter: (req, file, cb)=>{
        const extension = path.extname(file.originalname);
        if(extension !=='.jpeg' && extension !=='.png' && extension !=='.jpg' && extension !=='.webp'){
            cb(`unsupported file type`, false)
            return
        }
        cb(null, true)
    }
})

export {upload}