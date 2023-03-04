import express from 'express';
const router = express.Router();

import { login, logout } from '../controllers/loginController.js';
import { auth } from '../middlewares/auth.js';

router.post('/login', login);
router.get('/logout', logout);

export default router;
