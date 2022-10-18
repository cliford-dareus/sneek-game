require('express-async-errors');
require('dotenv').config({path : '../.env'});

const { default: helmet } = require('helmet');
const cors = require('cors')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

const userRouter = require('./routes/auth');
const gamesRoute = require('./routes/games');

const express = require('express');
const app = express();

app.use(express.static('../ client'));
app.use(express.json());
app.use(helmet());
app.use(cors())

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/games', gamesRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();