import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ShouldRender from "./common/ShouldRender";
import AppContext from "./context/AppContext";

const Header = () => {
const navigate = useNavigate();

const userState = useContext(AppContext)
const onLogout = ()=> {
  localStorage.removeItem('user');
  userState.setAuthenticated(false);
  navigate('/login');

}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <b>E-MAS</b>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-6">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
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
          <div>
          <ShouldRender cond={!userState.authenticated}>
            <Link className="btn btn-sm btn-info m-1" to='/login'>Login</Link>
            <Link className="btn btn-sm btn-warning m-1" to='/register'>Register</Link>
          </ShouldRender>
          <ShouldRender cond={userState.authenticated}>
            <Link onClick={onLogout} className="btn btn-sm btn-danger m-1" to='/login'>Logout</Link>
          </ShouldRender>
        </div>
      </div>
    </nav>
  );
};

export default Header;
