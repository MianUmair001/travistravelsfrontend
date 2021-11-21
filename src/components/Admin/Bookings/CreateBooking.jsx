import { Button } from "@material-ui/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const CreateBooking = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const profile = useSelector((state) => state.profile);
  const UserEmail = useSelector((state) => state.auth.userEmail);

  // setUser(profile.auth);
  const stripePromise = loadStripe(
    "pk_test_51I4t9UJWmS3lWIpGWYT2GaiHGMQ7K7kFYuPw5JtGNDJGAmlvgYIn96bUjyKNtnIModcfABUYxUK3GZKuITDxHV5m00wSepdVYZ"
  );
  useEffect(() => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
    setEmail(UserEmail);
    setPhone(profile.phone);
    setAddress(profile.address);
  }, []);

  return (
    <div>
      <section id="hero_2">
        <div className="intro_title">
          <h1>Place your order</h1>
          <div className="bs-wizard row">
            <div className="col-4 bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Your cart</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a href="cart.html" className="bs-wizard-dot" />
            </div>
            <div className="col-4 bs-wizard-step active">
              <div className="text-center bs-wizard-stepnum">Your details</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a href="#" className="bs-wizard-dot" />
            </div>
            <div className="col-4 bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Finish!</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <a
                href="confirmation_fixed_sidebar.html"
                className="bs-wizard-dot"
              />
            </div>
          </div>
          {/* End bs-wizard */}
        </div>
        {/* End intro-title */}
      </section>
      {/* End Section hero_2 */}
      <main>
        <div id="position">
          <div className="container">
            <a href="#">Home</a>
            <ul>
              <li>
                <a href="#">Category</a>
              </li>
              <li>Page active</li>
            </ul>
          </div>
        </div>
        {/* End position */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8 add_bottom_15">
              <div className="form_title">
                <h3>
                  <strong>1</strong>Your Details
                </h3>
              </div>
              <div className="step">
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname_booking"
                        name="firstname_booking"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname_booking"
                        name="lastname_booking"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email_booking"
                        name="email_booking"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        id="telephone_booking"
                        name="telephone_booking"
                        className="form-control"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*End step */}

              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
              {/*End step */}
            </div>
            <aside className="col-lg-4" id="sidebar">
              <div className="theiaStickySidebar">
                <div className="box_style_1" id="booking_box">
                  <h3 className="inner">- Summary -</h3>
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>Adults</td>
                        <td className="text-right">2</td>
                      </tr>
                      <tr>
                        <td>Children</td>
                        <td className="text-right">0</td>
                      </tr>
                      <tr>
                        <td>Dedicated tour guide</td>
                        <td className="text-right">$34</td>
                      </tr>
                      <tr>
                        <td>Insurance</td>
                        <td className="text-right">$34</td>
                      </tr>
                      <tr className="total">
                        <td>Total cost</td>
                        <td className="text-right">$154</td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    className="btn_full"
                    href="confirmation_fixed_sidebar.html"
                  >
                    Book now
                  </a>
                  <a className="btn_full_outline" href="#">
                    <i className="icon-right" /> Continue shopping
                  </a>
                </div>
              </div>
              {/*End sticky */}
            </aside>
          </div>
          {/*End row */}
        </div>
        {/*End container */}
      </main>
      {/* End main */}
    </div>
  );
};

export default CreateBooking;
