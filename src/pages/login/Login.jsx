import "./login.css";

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
            <input placeholder="Email" className="loginEmail" />
            <input placeholder="Password" className="loginPassword" />
            <button className="loginBtn">Log In</button>
            <span className="forgetPassword">Forget Password?</span>
            <button className="RegisterBtn">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
