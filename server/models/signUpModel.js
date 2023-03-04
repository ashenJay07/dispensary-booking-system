import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';

const signUpSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  picture: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});

signUpSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  // Encrypting password
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const SignUp = mongoose.model('SignUp', signUpSchema);

export default SignUp;
