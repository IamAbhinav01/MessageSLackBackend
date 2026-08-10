import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectTODB from './config/db.config.js';
import { PORT } from './config/server.config.js';
import apiRouter from './routers/api.routes.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'Hi Hello' });
});

app.listen(PORT, () => {
  console.log(`serving running on port : ${PORT}`);
  connectTODB();
});
