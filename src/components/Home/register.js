import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
                      <label>Username</label>
                      <input
                        type="text"
                        className=" form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className=" form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className=" form-control"
                        id="password1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm password</label>
                      <input
                        type="password"
                        className=" form-control"
                        id="password2"
                        placeholder="Confirm password"
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
                    >
                      Create An Account
                    </Button>
                    <Link to='/login' className='account' >Already Have An Account? Login Here!</Link>
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
