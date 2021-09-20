import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Forget_password = () => {
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
                    <div className="form-group">
                      <label>Please confirm login email below</label>
                      <input
                        type="text"
                        className=" form-control "
                        placeholder="Email"
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
                      value="Log In"
                    >
                      Reset Password
                    </Button>

                      <span>Don’t have an account?</span>
                      <Link to="/register" className="bab" style={{ color: "black" }}>
                        <b style={{marginLeft: '5px'}}>Sign up</b>
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

export default Forget_password;
