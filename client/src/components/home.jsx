import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Home extends Component {
  state = {
    authToken: '',
  };

  render() {
    const loginStyle = this.state.authToken
      ? 'row col-2  d-flex justify-content-around d-none'
      : 'row col-2  d-flex justify-content-around';

    this.setState({ authToken: Cookies.get('auth') });

    return (
      <main className="container pt-5">
        <div className="row mt-4">
          <div className="col-8 home-component">
            <h1 className="mb-4">Welcome to our Dispensary!</h1>
            <p>
              We are dedicated to providing the highest quality medicinal
              products and exceptional customer service to our valued clients.
              Our knowledgeable staff are passionate about medicinal products
              and are always happy to help you find the perfect product to meet
              your needs.
            </p>
            <p>
              In addition to our outstanding products, we pride ourselves on
              creating a welcoming and inclusive environment for everyone who
              walks through our doors. We are here to guide you every step of
              the way.
            </p>
            <p>
              So come visit us today and discover why we're the best Dispensary.
              We look forward to serving you!
            </p>
          </div>
          <div className="col-4">
            <img src="/welcome_pg.png" width={450} height={'auto'} alt="" />
          </div>
        </div>
        <div className={loginStyle}>
          <div className="col-6">
            <Link to="/login">
              <button type="button" className="btn btn-info main-theme">
                Login
              </button>
            </Link>
          </div>
          <div className="col-6 px-0">
            <Link to="/signup">
              <button type="button" className="btn main-theme">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
