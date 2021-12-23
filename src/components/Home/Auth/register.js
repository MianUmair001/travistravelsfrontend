import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("sp18-bse-179@cuilahore.edu.pk");
  const [password, setPassword] = useState("BabuIbrar@0344");
  const [confirmPassword, setConfirmPassword] = useState("BabuIbrar@0344");
  const [name, setName] = useState("Muhammad Ibrar");
  const [afterSubmit, setAfterSubmit] = useState(true);
  const [selectedOption, setSelectedOption] = useState();
  const [showError, setShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [showLoading, setshowLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowLoading(true);
    if (password === confirmPassword) {
      const success = await dispatch(signUp(email, password, selectedOption));
      const message = success.message;
      setAfterSubmit(false);
      localStorage.setItem("UserEmail", email);
      console.log("result", message);
      if (success.success === false) {
        setShowError(true);
        setShowErrorMessage(message);
      } else {
        history.push("/verifyEmail");
      }
    } else {
      toast.error("Passwords are not same");
    }
    const timer = setTimeout(() => {
      setshowLoading(false);
    }, 500);
    const timerError = setTimeout(() => {
      setShowError(false);
    }, 5000);
    return () => clearTimeout(timer, timerError);
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
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="styled-select-filters mb-5">
                      <select
                        value={selectedOption}
                        name="sort_price"
                        id="sort_price"
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <option value="">Register yourself as</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="hotelManager">Hotel Manager</option>
                        <option value="transportManager">
                          Transport Manager
                        </option>
                        <option value="restaurantManager">
                          Restuarant Manager
                        </option>
                      </select>
                    </div>
                  </div>
                  <form>
                    {showError ? (
                      <div
                        style={{
                          color: "red",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "5px",
                        }}
                      >
                        {showErrorMessage}
                      </div>
                    ) : null}

                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className=" form-control"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className=" form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className=" form-control"
                        id="password1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm password</label>
                      <input
                        type="password"
                        className=" form-control"
                        id="password2"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div id="pass-info" className="clearfix" />
                    {showLoading === true ? (
                      <div>
                        <Button
                          className="btn btn_full btn-block py-2 mt-5 mb-2"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textTransform: "unset",
                          }}
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            style={{ marginRight: "5px", color: 'red' }}
                          ></span>
                          loading...
                        </Button>
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          textTransform: "unset",
                        }}
                        className="btn btn_full_outline btn-block py-2 mb-3"
                        value="Create An Account"
                        onClick={handleSubmit}
                      >
                        Create An Account
                      </Button>
                    )}
                    <div>
                      Already Have An Account?
                      <Link
                        to="/login"
                        style={{ marginLeft: "2px", color: "black" }}
                      >
                        Login Here!
                      </Link>
                    </div>
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

export default Register;
