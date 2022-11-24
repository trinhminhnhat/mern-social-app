import express from 'express';

import { getFeedPosts, likePost } from '../controllers/post.controller.js';
import { verifyToken } from '../middleware/auth.js';

const routes = express.Router();

routes.get('/posts', verifyToken, getFeedPosts);
routes.patch('/posts/:id/like', verifyToken, likePost);

export default routes;
