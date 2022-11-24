import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './src/app.js';
import { posts, users } from "./src/mock-data/index.js";
import Post from './src/models/Post.js';
import User from './src/models/User.js';

dotenv.config();

// mongoose setup
const PORT = process.env.PORT || 3000;
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running port: ${PORT}`));

        // Create mock data - run once time
        // User.insertMany(users);
        // Post.insertMany(posts);
    })
    .catch((error) => console.log(`${error} did not connect`));
