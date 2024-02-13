import "./register.css";

export default function Register() {
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
            <input placeholder="UserName" className="loginUserName" />
            <input placeholder="Email" className="loginEmail" />
            <input placeholder="Password" className="loginPassword" />
            <input placeholder="Re-type Password" className="loginPassword" />
            <button className="RegisterBtn">Sign up</button>
            <span className="alreadyRegister">
              Do you already have an Account?
            </span>
            <button className="loginBtn">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
