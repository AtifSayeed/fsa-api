import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b>E-MAS</b>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-6">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          </div>
          <div className="inline">
            <Link className="btn btn-sm btn-info m-1" to='/login'>Login</Link>
            <Link className="btn btn-sm btn-warning m-1" to='/register'>Register</Link>
            <Link className="btn btn-sm btn-danger m-1" to='/logout'>Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
