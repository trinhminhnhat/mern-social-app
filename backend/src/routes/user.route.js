import express from 'express';

import { addRemoveFriend, getUser, getUserFriends } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/auth.js';

const routes = express.Router();

routes.get('/users/:id', verifyToken, getUser);
routes.get('/users/:id/friends', verifyToken, getUserFriends);
routes.patch('/users/:id/:friendId', verifyToken, addRemoveFriend);

export default routes;
