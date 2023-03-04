import express from 'express';
const router = express.Router();

import { users } from '../controllers/userController.js';
import { auth } from '../middlewares/auth.js';

router.get('/get-user', auth, users);

export default router;
