import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpDetails, fillSignUpDetails] = useState({});

  const submitUserDetails = async () => {
    // prettier-ignore
    await axios
      .post('http://localhost:3001/api/signup', signUpDetails, {withCredentials: true})
      .then((res) => { 
        console.log('User registed successfully');
        console.log(res.data)
        navigate('/login');
       });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUserDetails();
  };

  const handleChange = (e) => {
    const tempSignUpDetails = { ...signUpDetails };
    tempSignUpDetails[e.currentTarget.name] = e.currentTarget.value;
    fillSignUpDetails(tempSignUpDetails);
    console.log(tempSignUpDetails);
  };

  return (
    <main className="container d-flex justify-content-center">
      <div className="card col-6 my-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  pattern="[0-9]{10}"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confPassword"
                  name="confPassword"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <button type="submit" className="btn main-theme">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
