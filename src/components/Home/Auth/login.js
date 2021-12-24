import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { login } from "../../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("saabm6546@gmail.com");
  const [password, setPassword] = useState("Babuibrar@007");
  const [dataError, setDataError] = useState(false);
  const [showLoading, setshowLoading] = useState(false);

  const user = useSelector((state) => state.auth);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setshowLoading(true);
    const data = await dispatch(login(email, password));
    localStorage.setItem("UserEmail", email);
    if (data === undefined) {
      setDataError(true);
    } else {
      history.push("/");
    }
    const timer = setTimeout(() => {
      setshowLoading(false);
    }, 500);
    const timerError = setTimeout(() => {
      setDataError(false);
    }, 5000);
    return () => clearTimeout(timer, timerError);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    history.push("/register");
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
                    {/* <img
                      src="img/logo_sticky.png"
                      alt="Image"
                      data-retina="true"
                    /> */}
                    <h1>Travis Travels</h1>
                  </div>
                  <hr />
                  <form>
                    {dataError ? (
                      <div
                        style={{
                          color: "red",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "5px",
                        }}
                      >
                        Wrong Email or Password
                      </div>
                    ) : null}

                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
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

                    {showLoading === true ? (
                      <div>
                        <Button
                          class="btn btn_full btn-block py-2 mt-5 mb-2"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textTransform: "unset",
                          }}
                        >
                          <span
                            class="spinner-border spinner-border-sm"
                            style={{ marginRight: "5px" }}
                          ></span>
                          loading...
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          type="submit"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textTransform: "unset",
                          }}
                          className="btn btn_full btn-block py-2 mt-3 mb-2"
                          value="Log In"
                          onClick={handleLoginSubmit}
                          disabled={!email || !password}
                        >
                          Login
                        </Button>
                      </div>
                    )}

                    <Button
                      type="submit"
                      style={{
                        border: "1px solid green",
                        color: "black",
                        textTransform: "unset",
                      }}
                      className="btn btn_full_outline btn-block py-2 mb-4"
                      value="Log In"
                      onClick={handleRegisterSubmit}
                    >
                      Register
                    </Button>

                    <Link to="/" className="centerText">
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
