import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import path from 'path';
import { fileURLToPath } from 'url';

import routes from './routes/index.js';

// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(
    express.json({
        limit: '30mb',
        extended: true,
    }),
);
app.use(
    express.urlencoded({
        limit: '30mb',
        extended: true,
    }),
);
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// routes
app.use(routes);

export default app;
