import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { verifyEmail } from "../../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const email = localStorage.getItem("UserEmail");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    dispatch(verifyEmail(email, code));
    history.push("/login");
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
                      style={{ width: "200px" }}
                    />
                  </div>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label>
                        A Email containing code has been sent to your Email -{" "}
                        <b>{email}</b>
                      </label>
                      <input
                        type="text"
                        className=" form-control "
                        placeholder="Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>
                        <small>
                          You will receive an email containing a link allowing
                          you to reset your password to a new preferred on
                        </small>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        textTransform: "unset",
                      }}
                      className="btn btn_full btn-block py-2 mt-3 mb-2"
                      value="Verify Email"
                      onClick={handleSubmit}
                    >
                      Verify Email
                    </Button>

                    <span>Already have an account?</span>
                    <Link
                      to="/login"
                      className="bab"
                      style={{ color: "black" }}
                    >
                      <b style={{ marginLeft: "5px" }}>Login</b>
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

export default VerifyEmail;
