import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// importing custom routes
import signUp from './routes/signUp.js';
import login from './routes/login.js';
import users from './routes/users.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// custom route middlewares
app.use('/api', signUp);
app.use('/api', login);
app.use('/api', users);

const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
const PORT = process.env.PORT || 5001;
mongoose.set('strictQuery', false);
// prettier-ignore
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`)))
  .catch((error) => console.log(error.message));
