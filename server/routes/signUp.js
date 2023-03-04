import express from 'express';
const router = express.Router();

import { signUp } from '../controllers/signUpController.js';

router.post('/signup', signUp);

export default router;
