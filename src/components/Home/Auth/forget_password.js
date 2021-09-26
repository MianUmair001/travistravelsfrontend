import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-modal'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { forgotPassword } from '../../../redux/actions/auth.action'

Modal.setAppElement('#root')
const Forget_password = ({ history }) => {

  const userEmail = localStorage.getItem('UserEmail')

  const [email, setEmail] = useState(userEmail)
  const [modelIsOpen, setModelIsOpen] = useState(false)

  const dispatch = useDispatch()

  const resetHandler = (e) => {
    e.preventDefault()
    console.log('Reset Handler')
    dispatch(forgotPassword(email))
    setEmail('')

    setModelIsOpen(true)
  }

  const modelHandler = () => {
    setModelIsOpen(false)
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
                          You will receive an email containing a code allowing
                          you to reset your password to a new preferred one. Thank You!
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
                      <div className='centerText'>
                      <span>Don’t have an account?</span>
                      <Link to="/register" style={{marginLeft: '3px', color: 'black'}}>
                        <b>Register</b>
                      </Link>
                      </div>

                      {/*<Popup trigger={<button> Trigger</button>} position="right center">
                      <div>Popup content here !!.Popup content here !!</div>
                    </Popup> */}

                    

                  </form>

                  {/* <Modal
                      isOpen={modelIsOpen}
                      contentLabel='Code Sent'
                      onRequestClose={() => setModelIsOpen(false)}
                      shouldCloseOnOverlayClick={true}
                      
                  >
                      <h3>Verification code has been sent to your email - {email}</h3>
                      
                      <hr />
                      <h3 onClick={modelHandler}>OK</h3>


                  </Modal> */}

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
