import express from 'express';

import authRoutes from './auth.route.js';

const routes = express.Router();

routes.use(authRoutes);

export default routes;
