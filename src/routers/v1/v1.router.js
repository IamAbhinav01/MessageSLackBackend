import express from 'express';

import Userrouter from './users.routes.js';

const router = express.Router();

router.use('/users', Userrouter);

export default router;
