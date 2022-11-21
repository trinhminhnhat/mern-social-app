import express from 'express';

import { register } from '../controllers/auth.controller.js';
import { upload } from '../utils/multer.js';

const routes = express.Router();

routes.post('/auth/register', upload.single('picture'), register);

export default routes;
