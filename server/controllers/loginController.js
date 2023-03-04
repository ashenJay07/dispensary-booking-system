import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import SignUp from '../models/signUpModel.js';
import getJWTToken from '../utils/jwtToken.js';

// Login User
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  // validate login
  if (!email || !password) {
    res.status(400);
    throw new Error('Please add both email and password');
  }

  // Check if user exists
  const user = await SignUp.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error('User not found. Please Sign Up!!!');
  }

  // User exists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  // Generate token
  const token = getJWTToken(user._id);

  // Send cookie
  res.cookie('token', token, {
    path: '/',
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86000),
    sameSite: 'none',
    secure: true,
  });

  if (user && passwordIsCorrect) {
    const { id, firstName, lastName, email, mobileNumber, picture, createdAt } =
      user;
    res.status(201).json({
      id,
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

/* 


*/

// Logout User
export const logout = asyncHandler(async (req, res) => {
  // Delete cookie
  res.cookie('token', '', {
    path: '/',
    httpOnly: true,
    expires: new Date(0),
    sameSite: 'none',
    secure: true,
  });

  return res.status(200).json({ message: 'Successfully Logged Out' });
});
