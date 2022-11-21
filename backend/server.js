import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './src/app.js';

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
    })
    .catch((error) => console.log(`${error} did not connect`));
