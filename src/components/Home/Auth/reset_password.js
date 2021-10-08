import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
  resetPassword,
  resendCode,
  validateCode,
} from "../../../redux/actions/auth.action";

const Reset_password = ({ history }) => {
  const userEmail = localStorage.getItem("UserEmail");
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState("Babuibrar@007");
  const [confirmPassword, setConfirmPassword] = useState("Babuibrar@007");
  const [code, setCode] = useState("");
  const [statusCode, setStatusCode] = useState(false);

  const dispatch = useDispatch();

  const resetHandler = (e) => {
    e.preventDefault();
    console.log("Reset Handler");
    if (password === confirmPassword) {
      dispatch(resetPassword(email, password));
      history.push("/login");
    } else {
      toast.error("Password not matched");
    }
  };

  const codeHandler = async (e) => {
    e.preventDefault();
    console.log("codeHandler");
    const status = await dispatch(validateCode(code, email));
    console.log("I m status code", status);
    if (status === 201) {
      setStatusCode(true);
    }
  };

  const handleResendCode = (e) => {
    e.preventDefault();
    console.log("handleResendCode");
    dispatch(resendCode(email, "otp"));
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
                    {statusCode === false && (
                      <>
                        <div className="form-group">
                          <label>Enter the code below</label>
                          <input
                            type="number"
                            className=" form-control "
                            placeholder="Code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                          />
                        </div>
                        <div>
                          <span style={{ marginLeft: "20px" }}>
                            Didn't get the code yet?
                          </span>
                          <Link onClick={handleResendCode}>
                            <b style={{ marginLeft: "5px", color: "black" }}>
                              Resend Code
                            </b>
                          </Link>
                        </div>

                        <Button
                          type="submit"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textTransform: "unset",
                          }}
                          className="btn btn_full btn-block py-2 mt-3 mb-3"
                          value="submit code"
                          onClick={codeHandler}
                        >
                          Submit Code
                        </Button>
                      </>
                    )}

                    {statusCode && (
                      <>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className=" form-control "
                            placeholder="Email"
                            value={email}
                          />
                        </div>
                        <div className="form-group">
                          <label>New Password</label>
                          <input
                            type="password"
                            className=" form-control "
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            className=" form-control "
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <Button
                          type="submit"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textTransform: "unset",
                          }}
                          className="btn btn_full btn-block py-2 mt-3 mb-3"
                          value="Reset Password"
                          onClick={resetHandler}
                        >
                          Reset Password
                        </Button>

                        <span style={{ marginLeft: "40px" }}>
                          Don’t have an account?
                        </span>
                        <Link to="/register">
                          <b style={{ marginLeft: "5px", color: "black" }}>
                            Sign up
                          </b>
                        </Link>
                      </>
                    )}
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

export default Reset_password;
