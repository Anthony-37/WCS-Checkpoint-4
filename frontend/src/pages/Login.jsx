import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordIco from "../assets/svg/svg-path/PasswordIco";
import LoginIco from "../assets/svg/svg-path/LoginIco";
import Btnreturn from "../assets/svg/svg-path/Btnreturn";
import "react-toastify/dist/ReactToastify.css";
import "../styles/_Login.scss";

import userAPI from "../services/userAPI";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      userAPI
        .post("/auth/login", { email, password })
        .then(() => {
          toast.success("You are logged in!");
          navigate("/RoyalAssets");
        })
        .catch(() => toast.warning("Wrong email or password"));
    }
    if (!email && !password) {
      toast.warning("Please enter your email and password");
    }
    if (email && !password) {
      toast.warning("Please enter your password");
    }
    if (!email && password) {
      toast.warning("Please enter your email");
    }
  };

  return (
    <section id="login">
      <div className="container">
        <h1>Log in</h1>
        <p>Please enter yor Email and Password</p>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="login-field">
            <LoginIco />
            <input
              className="input-login"
              type="text"
              id="user"
              name="user"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field login-icon">
            <PasswordIco />
            <input
              className="input-login"
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
        <NavLink className="btn-return" to="/Home">
          <Btnreturn />
        </NavLink>
      </div>
    </section>
  );
}
