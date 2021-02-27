import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();

import rideRoutes from './routes/rideWaitTimes.js';

mongoose.connect(
    'mongdburl',
    {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB!'))
    .catch(() => console.log('Connection failed :(('));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api', rideRoutes);

export default app;