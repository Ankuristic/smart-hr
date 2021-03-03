import React, { useRef, useState } from "react";
import Applogo from "../../assets/img/logo2.png";
import { Helmet } from "react-helmet";
import { useAuth } from "../../context/auth_context";

const Loginpage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [success, setSuccess] = useState("");
  const { login, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  async function handleSubmit(e) {
    //e.preventDefault();
    debugger;
    console.log("came here");
    try {
      setError("");
      setSuccess("");
      var user = await login(email, password);
      debugger;
      setSuccess(alert("loged in successfully"));
    } catch (error) {
      setError(error.message);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div className="main-wrapper">
      <Helmet>
        <title>Login - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>

      {error && alert(error)}
      {success}
      <div className="account-content">
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <img src={Applogo} alt="Astutex Technology Solutions" />
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our Astutex </p>
              {/* Account Form */}
              {currentUser}
              <form onSubmit={async () => {
                      await handleSubmit(email, password);
                    }}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name="userEmail"
                    value={email}
                    id="userEmail"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="/orange/forgotpassword">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    name="userPassword"
                    value={password}
                    placeholder="Your Password"
                    id="userPassword"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    className="btn btn-primary account-btn"
                    
                  >
                    Login
                  </button>
                </div>
              </form>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
