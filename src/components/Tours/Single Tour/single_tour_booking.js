import React from "react";

const Single_tour_booking = () => {
  return (
    <>
      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
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
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname_booking"
                        name="firstname_booking"
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
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email_booking"
                        name="email_booking"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Confirm email</label>
                      <input
                        type="email"
                        id="email_booking_2"
                        name="email_booking_2"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Telephone</label>
                      <input
                        type="text"
                        id="telephone_booking"
                        name="telephone_booking"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*End step */}
              <div className="form_title">
                <h3>
                  <strong>2</strong>Payment Information
                </h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <div className="form-group">
                  <label>Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name_card_bookign"
                    name="name_card_bookign"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Card number</label>
                      <input
                        type="text"
                        id="card_number"
                        name="card_number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <img
                      src="img/cards.png"
                      width={207}
                      height={43}
                      alt="Cards"
                      className="cards"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Expiration date</label>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="expire_month"
                            name="expire_month"
                            className="form-control"
                            placeholder="MM"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="expire_year"
                            name="expire_year"
                            className="form-control"
                            placeholder="Year"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Security code</label>
                      <div className="row">
                        <div className="col-4">
                          <div className="form-group">
                            <input
                              type="text"
                              id="ccv"
                              name="ccv"
                              className="form-control"
                              placeholder="CCV"
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <img
                            src="img/icon_ccv.gif"
                            width={50}
                            height={29}
                            alt="ccv"
                          />
                          <small>Last 3 digits</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End row */}
                <hr />
                <h4>Or checkout with Paypal</h4>
                <p>
                  Lorem ipsum dolor sit amet, vim id accusata sensibus, id
                  ridens quaeque qui. Ne qui vocent ornatus molestie, reque
                  fierent dissentiunt mel ea.
                </p>
                <p>
                  <img src="img/paypal_bt.png" alt="Image" />
                </p>
              </div>
              {/*End step */}
              <div className="form_title">
                <h3>
                  <strong>3</strong>Billing Address
                </h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Country</label>
                      <select
                        className="form-control"
                        name="country"
                        id="country"
                      >
                        <option value selected>
                          Select your country
                        </option>
                        <option value="Europe">Europe</option>
                        <option value="United states">United states</option>
                        <option value="Asia">Asia</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Street line 1</label>
                      <input
                        type="text"
                        id="street_1"
                        name="street_1"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Street line 2</label>
                      <input
                        type="text"
                        id="street_2"
                        name="street_2"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        id="city_booking"
                        name="city_booking"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        id="state_booking"
                        name="state_booking"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="form-group">
                      <label>Postal code</label>
                      <input
                        type="text"
                        id="postal_code"
                        name="postal_code"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                {/*End row */}
              </div>
              {/*End step */}
              <div id="policy">
                <h4>Cancellation policy</h4>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="policy_terms"
                      id="policy_terms"
                    />
                    I accept terms and conditions and general policy.
                  </label>
                </div>
                <a href="confirmation.html" className="btn_1 green medium">
                  Book now
                </a>
              </div>
            </div>
            <aside className="col-lg-4">
              <div className="box_style_1">
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
                <a className="btn_full" href="confirmation.html">
                  Book now
                </a>
                <a className="btn_full_outline" href="#">
                  <i className="icon-right" /> Continue shopping
                </a>
              </div>
              <div className="box_style_4">
                <i className="icon_set_1_icon-57" />
                <h4>
                  Need <span>Help?</span>
                </h4>
                <a href="tel://004542344599" className="phone">
                  +45 423 445 99
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>
          </div>
          {/*End row */}
        </div>
        {/*End container */}
      </main>
      {/* End main */}
    </>
  );
};

export default Single_tour_booking;
