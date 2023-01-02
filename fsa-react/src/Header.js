import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <b>E-MAS</b>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-6">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">
                User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
