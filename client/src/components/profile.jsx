import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const date = new Date();
  const [render, setRender] = useState(true);
  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async () => {
    // prettier-ignore
    await axios
      .get('http://localhost:3001/api/get-user',  {withCredentials: true})
      .then((res) => { 
        setUserDetails(res.data)
        setRender(false);
       });
  };

  if (render) getUserDetails();

  return (
    <main className="container pt-5 d-flex justify-content-center">
      <div className="card col-5">
        <div className="card-body">
          <div className="d-flex justify-content-center mb-5">
            <h2>User Profile</h2>
          </div>
          <div className="px-4">
            <p>First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.lastName}</p>
            <p>Email: {userDetails.email}</p>
            <p>Contact Number: {userDetails.mobileNumber}</p>
            <p>Profile Created At: {date.toUTCString(userDetails.createdAt)}</p>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/home">
              <button type="button" className="btn main-theme">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
