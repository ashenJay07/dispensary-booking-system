import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

class NavBar extends Component {
  state = {
    authToken: '',
  };

  handleClick = async () => {
    await axios
      .get('http://localhost:3001/api/logout', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        Cookies.remove('auth');
        const token = Cookies.get('auth');
        this.props.onAuthStatus(token);
        this.props.navigate('/home');
      });
    // this.setState({ authToken: Cookies.get('auth') });
  };

  render() {
    const { authToken } = this.props;
    const loginStyle = authToken ? 'nav-item d-none' : 'nav-item';
    const logoutBtnStyle = authToken
      ? 'btn main-theme'
      : 'btn main-theme d-none';
    const profileStyle = authToken ? 'nav-item' : 'nav-item d-none';

    return (
      <nav
        className="navbar navbar-expand nav-bar px-5"
        aria-label="Second navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand white-font-bold" href="/home">
            Dispensary Booking System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link white-font active"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className={loginStyle}>
                <a className="nav-link white-font" href="/login">
                  Login
                </a>
              </li>
              <li className={loginStyle}>
                <a className="nav-link white-font" href="/signup">
                  Signup
                </a>
              </li>
              <li className={profileStyle}>
                <a className="nav-link white-font" href="/profile">
                  Profile
                </a>
              </li>
            </ul>
            <button
              type="button"
              className={logoutBtnStyle}
              onClick={this.handleClick}
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
