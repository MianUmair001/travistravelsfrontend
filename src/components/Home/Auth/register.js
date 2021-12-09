import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("amianumair@gmail.com");
  const [password, setPassword] = useState("IamUmair@005");
  const [confirmPassword, setConfirmPassword] = useState("IamUmair@005");
  const [name, setName] = useState("MuhammadUmair");
  const [afterSubmit, setAfterSubmit] = useState(true);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const modelHandler = () => {
    setModelIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const success = await dispatch(signUp(email, password));
      console.log("succuss, failed", success.success);
      const result = success.success;
      setAfterSubmit(false);
      const UserEmail = localStorage.setItem('UserEmail', email);
      if (result === false) {
        setShowError(true);
      } else {
        history.push("/verifyEmail");
      }
    } else {
      toast.error("Passwords are not same");
    }
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
                    {showError ? (
                      <div
                        style={{
                          color: "red",
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "5px",
                        }}
                      >
                        Email already exists
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
                    <Link to="/login" className="account">
                      Already Have An Account? Login Here!
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

export default Register;
