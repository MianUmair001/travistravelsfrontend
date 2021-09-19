import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { login } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("babuibrar93@gmail.com");
  const [password, setPassword] = useState("IamUmair@005");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email is ", email, "Password is ", password);
    dispatch(login(email, password));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault()

    history.push('/register')
  }

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
                      <span>
                        <b>Or</b>
                      </span>
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
                    <Link to="/forget_password" className="ForgetPassword">
                      Forget Password?
                    </Link>
                    <Button
                      type="submit"
                      style={{ backgroundColor: "green", color: "white", textTransform: 'unset' }}
                      className="btn btn_full btn-block py-2 mt-3 mb-2"
                      value="Log In"
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                    <Button
                      type="submit"
                      style={{ border: '1px solid green', color: "black", textTransform: 'unset'  }}
                      className="btn btn_full_outline btn-block py-2 mb-4"
                      value="Log In"
                      onClick={handleRegisterSubmit}
                    >
                      Register
                    </Button>

                    <Link to="/" className="BackToHome">
                      Back To Home
                    </Link>
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
