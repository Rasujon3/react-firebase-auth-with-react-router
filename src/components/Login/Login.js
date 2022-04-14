import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleFormInput = (event) => {
    userInfo[event.target.name] = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };
  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-center">{login ? "Login" : "Register"}</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={(event) => handleFormInput(event)}
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={(event) => handleFormInput(event)}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* sdajfkla */}
        {!login && (
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              onBlur={(event) => handleFormInput(event)}
              type="password"
              name="confirmPass"
              className="form-control"
              id="exampleInputConfirmPassword1"
            />
          </div>
        )}
        {/* jsdkla */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={() => setLogin(!login)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {login ? "login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Login;
