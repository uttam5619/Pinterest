import express from 'express';
import { createFeed, getFeed } from '../controllers/feed.controller.js';
const feedRouter = express.Router()


feedRouter.post('/createFeed',createFeed)
feedRouter.put('/updateFeed')
feedRouter.delete('/deleteFeed')
feedRouter.get('/getFeed',getFeed)


export default feedRouter