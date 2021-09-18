import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.action";

const SignIn = () => {
  const [email, setEmail] = useState("amianumair@gmail.com");
  const [password, setPassword] = useState("IamUmair@005");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email is ", email, "Password is ", password);
    dispatch(login(email, password));
  };
  return (
    <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
      <div className="small-dialog-header">
        <h3>Sign In</h3>
      </div>
      <form>
        <div className="sign-in-wrapper">
          <a href="#0" className="social_bt facebook">
            Login with Facebook
          </a>
          <a href="#0" className="social_bt google">
            Login with Google
          </a>
          <div className="divider">
            <span>Or</span>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="icon_mail_alt" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="icon_lock_alt" />
          </div>
          <div className="clearfix add_bottom_15">
            <div className="checkboxes float-left">
              <input id="remember-me" type="checkbox" name="check" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <div className="float-right">
              <a id="forgot" href="">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              defaultValue="Log In"
              className="btn_login"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            Don’t have an account? <a>Sign up</a>
          </div>
        </div>
      </form>
      {/*form */}
    </div>
  );
};

export default SignIn;
