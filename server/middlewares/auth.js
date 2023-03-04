import asyncHandler from 'express-async-handler';
import SignUp from '../models/signUpModel.js';
import jwt from 'jsonwebtoken';

export const auth = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401);
      throw new Error('Not authorized, please login');
    }

    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verified.id;
    console.log(verified);

    next();
  } catch (error) {
    res.status(401);
  }
});
