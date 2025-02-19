import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/connectDB.js';
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/users', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

