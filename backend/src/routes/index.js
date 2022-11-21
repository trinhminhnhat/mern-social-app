import express from 'express';

import userRoutes from './auth.route.js';

const routes = express.Router();

routes.use(userRoutes);

export default routes;
