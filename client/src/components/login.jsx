import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = ({ onAuthStatus }) => {
  const navigate = useNavigate();
  const [loginDetails, fillLoginDetails] = useState({});

  const getUserDetails = async () => {
    // prettier-ignore
    await axios
      .post('http://localhost:3001/api/login', loginDetails, {withCredentials: true})
      .then((res) => { 
        console.log(res.data);
        const token = Cookies.set('auth', res.data.id);
        onAuthStatus(token);
      });
    navigate('/profile', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserDetails();
    console.log('clicked');
  };

  const handleChange = (e) => {
    const tempLoginDetails = { ...loginDetails };
    tempLoginDetails[e.currentTarget.name] = e.currentTarget.value;
    fillLoginDetails(tempLoginDetails);
  };

  return (
    <main className="container d-flex justify-content-center">
      <div className="card col-4 my-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                aria-describedby="emailHelp"
              />
            </div>
            <div>
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
            <div className="d-flex mt-4 pt-3 justify-content-center">
              <button type="submit" className="btn  main-theme">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
