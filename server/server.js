import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/connectDB.js';
import userRouter from './routes/user.routes.js';
import eventRouter from './routes/events.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}))
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

