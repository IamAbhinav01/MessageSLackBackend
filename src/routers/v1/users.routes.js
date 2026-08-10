import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(StatusCodes.ACCEPTED).json({ message: 'Hello User' });
});

export default router;
