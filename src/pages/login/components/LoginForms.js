/* export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
export const ACCESS_TOKEN_NAME = 'login_access_token'; */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../../util/constants";
import "./LoginForms.css";

function LoginForm({ Login, error }) {
  const [data, setData] = React.useState({
    userid: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setData({
      ...data,
      [id]: value,
    });
  };
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    apiCall(data);

    // Login(data);
    // navigate('/home/list')
  };

  const handleClick = () => {
    //apiCall(data);

    navigate("/register");
  };

  const apiCall = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(USER_LOGIN, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("this is",result);
        if (eval(result)) {
            localStorage.setItem("userid",(data.userid));
            localStorage.setItem("password",(data.password));
            navigate('/home/dashboard')

        }
        else {
          console.log("Details do not match!");
          alert("UserID or Password do not match!");
        }
      })

      .catch((error) => console.log("error", error));
  };

  const [disableBtn, setDisableBtn] = React.useState(false);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <img src="/images/avatar.jpg" class="avatar" />
        <h2>Login</h2>
        {error != "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <label htmlfor="email">User ID: </label>
          <input
            name="email"
            id="userid"
            onChange={handleChange}
            value={data.userid}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <br />
        <input type="submit" value="LOGIN" disabled={disableBtn} />
        <br />
        <br />
        <input
          type="submit"
          value="REGISTER"
          onClick={handleClick}
          disabled={disableBtn}
        />
      </div>
    </form>
  );
}

export default LoginForm;
