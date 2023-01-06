import axios from "./utils/axios";
import React, { useState, useContext } from "react";
import ShouldRender from "./common/ShouldRender";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/AppContext";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const userState = useContext(AppContext);

  const [hasError, setError] = useState(false);

  const navigate = useNavigate();

  const onLogin = async (evt) => {
    try {
      console.log("Logging in...");
      evt.preventDefault();
      console.log(user);
      const res = await axios().post("/api/users/signin", user);
      localStorage.setItem("user", JSON.stringify(res.data));
      userState.setAuthenticated(true);
      //navigating...
      navigate("/home");
    } catch (err) {
      setError(err);
    }
  };

  const onInputChange = (evt) => {
    const newUser = { ...user, [evt.target.name]: evt.target.value };
    setuser(newUser);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="col-5">
        <ShouldRender cond={hasError}>
          <div className="alert alert-danger">Wrong username or password</div>
        </ShouldRender>

        <form onSubmit={onLogin}>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={onInputChange}
              name="email"
              id="email"
              className="form-control"
              type="text"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={onInputChange}
              name="password"
              id="password"
              className="form-control"
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <div className="center m-3">
            <button className="btn btn-sm btn-info" type="submit">
              Login
            </button>
          </div>
          <hr />
          <div className="m-3">
            <button className="btn btn-sm btn-warning" type="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
