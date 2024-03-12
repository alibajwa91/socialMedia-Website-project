import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginleft">
          <h1 className="loginLogo">Post Up</h1>

          <span className="LoginDesc">
            Login To Exlore Social World & Meet New Friends!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginEmail" />
            <input
              type="password"
              placeholder="Password"
              className="loginPassword"
            />
            <Link to="/homepage">
              <button className="loginBtn">Log In</button>
            </Link>
            <span className="forgetPassword">Forget Password?</span>
            <Link to="/registerpage">
              <button className="RegisterBtn">Create New Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
