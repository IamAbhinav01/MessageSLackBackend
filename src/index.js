import express from 'express';
import { PORT } from './config/server.config.js';

const app = express();

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'Hi Hello' });
});

app.listen(PORT, () => {
  console.log(`serving running on port : ${PORT}`);
});
