import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { forgotPassword } from '../../../redux/actions/auth.action'

const Forget_password = ({ history }) => {

  const userEmail = localStorage.getItem('UserEmail')
  const [email, setEmail] = useState(userEmail)
  const dispatch = useDispatch()

  const resetHandler = (e) => {
    e.preventDefault()
    console.log('Reset Handler')
    dispatch(forgotPassword(email))
    setEmail('')

    history.push('/reset_password')
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
                    <div className="form-group">
                      <label>Please confirm login email below</label>
                      <input
                        type="text"
                        className=" form-control "
                        placeholder="Email"
                        value={email}
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
                      className="btn btn_full btn-block py-2 mt-3 mb-3"
                      value="Reset Password"
                      onClick={resetHandler}
                    >
                      Get Code
                    </Button>
 
                      <span style={{marginLeft: '35px'}}>Don’t have an account?</span>
                      <Link to="/register" style={{ color: "black" }}>
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
