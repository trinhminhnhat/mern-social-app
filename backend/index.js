import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
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

// file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

// mongoose setup
const PORT = process.env.PORT || 3000;
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
