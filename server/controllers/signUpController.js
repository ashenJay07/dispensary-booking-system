import SignUp from '../models/signUpModel.js';
import asyncHandler from 'express-async-handler';

export const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, mobileNumber, picture, password } =
    req.body;

  // check if user email already exists
  const userExists = await SignUp.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('This email has already been used');
  }

  // create new user
  const user = await SignUp.create({
    firstName,
    lastName,
    email,
    mobileNumber,
    picture,
    password,
  });

  if (user) {
    const { firstName, lastName, email, mobileNumber, createdAt } = user;
    res.status(201).json({
      firstName,
      lastName,
      email,
      mobileNumber,
      createdAt,
    });
  } else {
    throw new Error('Invalid user data');
  }
});
