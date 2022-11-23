import express from 'express';

import authRoutes from './auth.route.js';
import userRoutes from './user.route.js';

const routes = express.Router();

routes.use(authRoutes);
routes.use(userRoutes);

export default routes;
