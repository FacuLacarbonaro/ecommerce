import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

import AmazonLogo from "../../sass/assets/img/png/amazon-logo2.png";
import "../../sass/main.scss";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={AmazonLogo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            onClick={handleLogin}
            className="login__container__signInButton"
            type="submit"
          >
            Sign in
          </button>
          <p>Accept conditions </p>
          <button
            onClick={handleRegister}
            className="login__container__registerButton"
            type="submit"
          >
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
