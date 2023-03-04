import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import SignUp from '../models/signUpModel.js';
import getJWTToken from '../utils/jwtToken.js';

// Login User
export const users = asyncHandler(async (req, res) => {
  // Check if user exists
  const user = await SignUp.findById(req.userId);

  if (!user) {
    res.status(400);
    throw new Error('User not found. Please Sign Up!!!');
  }

  if (user) {
    const { firstName, lastName, email, mobileNumber, picture, createdAt } =
      user;
    res.status(201).json({
      firstName,
      lastName,
      email,
      mobileNumber,
      picture,
      createdAt,
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
});
