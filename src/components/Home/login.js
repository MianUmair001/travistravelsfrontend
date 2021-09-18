import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { login } from "../../redux/actions/auth.action";

const Login = () => {
  const [email, setEmail] = useState("babuibrar93@gmail.com");
  const [password, setPassword] = useState("IamUmair@005");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email is ", email, "Password is ", password);
    dispatch(login(email, password));
  };

  return (
    <>
      <main>
        <section id="hero" className="login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div id="login">
                  <div className="text-center">
                    <img
                      src="img/logo_sticky.png"
                      alt="Image"
                      data-retina="true"
                    />
                  </div>
                  <hr />
                  <form>
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
                      <label>Username</label>
                      <input
                        type="text"
                        className=" form-control "
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className=" form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <p className="small">
                      <a href="#">Forgot Password?</a>
                    </p>
                    <Button
                      type="submit"
                      style={{ backgroundColor: "green", color: "white" }}
                      className="btn btn_full btn-block py-2 mb-2"
                      value="Log In"
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                    <a href="register.html " className="btn_full_outline">
                      Register
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End main */}
    </>
  );
};

export default Login;
