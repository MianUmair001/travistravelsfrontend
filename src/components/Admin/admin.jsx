import React from "react";
import Profile from "./profile";
import "./Styles/admin.css";
const Admin = () => {
  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/admin_top.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Hello Clara!</h1>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
          </div>
        </div>
      </section>
      {/* End section */}
      {/* End section */}
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
        {/* End Position */}
        <div className="margin_60 container">
          <div id="tabs" className="tabs">
            <nav>
              <ul>
                <li>
                  <a href="#section-1" className="icon-booking">
                    <span>Bookings</span>
                  </a>
                </li>
                <li>
                  <a href="#section-2" className="icon-wishlist">
                    <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="#section-3" className="icon-settings">
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#section-4" className="icon-profile">
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="content">
              <section id="section-1">
                <div id="tools">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_type" id="sort_type">
                          <option value selected>
                            Sort by type
                          </option>
                          <option value="tours">Tours</option>
                          <option value="hotels">Hotels</option>
                          <option value="transfers">Transfers</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_date" id="sort_date">
                          <option value selected>
                            Sort by date
                          </option>
                          <option value="oldest">Oldest</option>
                          <option value="recent">Recent</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/tools */}

                {[1, 2, 3, 4].map((number) => (
                  <div className="strip_booking">
                    <div className="row">
                      <div className="col-lg-2 col-md-2">
                        <div className="date">
                          <span className="month">Dec</span>
                          <span className="day">
                            <strong>23</strong>Sat
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <h3 className="hotel_booking">
                          Hotel Mariott Paris<span>2 Adults / 2 Nights</span>
                        </h3>
                      </div>
                      <div className="col-lg-2 col-md-3">
                        <ul className="info_booking">
                          <li>
                            <strong>Booking id</strong> 23442
                          </li>
                          <li>
                            <strong>Booked on</strong> Sat. 23 Dec. 2015
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-2 col-md-2">
                        <div className="booking_buttons">
                          <a href="#0" className="btn_2">
                            Edit
                          </a>
                          <a href="#0" className="btn_3">
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                  </div>
                ))}
              </section>
              {/* End section 1 */}
              <section id="section-2">
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <div className="col-lg-4 col-md-6">
                      <div className="hotel_container">
                        <div className="img_container">
                          <a href="single_hotel.html">
                            <img
                              src="img/hotel_1.jpg"
                              width={800}
                              height={533}
                              className="img-fluid"
                              alt="Image"
                            />
                            <div className="ribbon top_rated"></div>
                            <div className="score">
                              <span>7.5</span>Good
                            </div>
                            <div className="short_info hotel">
                              From/Per night
                              <span className="price">
                                <sup>$</sup>59
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="hotel_title">
                          <h3>
                            <strong>Park Hyatt</strong> Hotel
                          </h3>
                          <div className="rating">
                            <i className="icon-star voted" />
                            <i className="icon-star voted" />
                            <i className="icon-star voted" />
                            <i className="icon-star voted" />
                            <i className="icon-star-empty" />
                          </div>
                          {/* end rating */}
                          <div className="wishlist_close_admin">-</div>
                        </div>
                      </div>
                      {/* End box tour */}
                    </div>
                  ))}
                </div>
                {/* End row */}
                <button type="submit" className="btn_1 green">
                  Update wishlist
                </button>
              </section>
              {/* End section 2 */}
              <section id="section-3">
                <div className="row">
                  <div className="col-md-6 add_bottom_30">
                    <h4>Change your password</h4>
                    <div className="form-group">
                      <label>Old password</label>
                      <input
                        className="form-control"
                        name="old_password"
                        id="old_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>New password</label>
                      <input
                        className="form-control"
                        name="new_password"
                        id="new_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm new password</label>
                      <input
                        className="form-control"
                        name="confirm_new_password"
                        id="confirm_new_password"
                        type="password"
                      />
                    </div>
                    <button type="submit" className="btn_1 green">
                      Update Password
                    </button>
                  </div>
                  <div className="col-md-6 add_bottom_30">
                    <h4>Change your email</h4>
                    <div className="form-group">
                      <label>Old email</label>
                      <input
                        className="form-control"
                        name="old_password"
                        id="old_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>New email</label>
                      <input
                        className="form-control"
                        name="new_password"
                        id="new_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm new email</label>
                      <input
                        className="form-control"
                        name="confirm_new_password"
                        id="confirm_new_password"
                        type="password"
                      />
                    </div>
                    <button type="submit" className="btn_1 green">
                      Update Email
                    </button>
                  </div>
                </div>
                {/* End row */}
                <hr />
                <br />
                <div className="row">
                  <div className="col-lg-6">
                    <h4>Notification settings</h4>
                    <table className="table table-striped options_cart">
                      <tbody>
                        <tr>
                          <td style={{ width: "10%" }}>
                            <i className="icon_set_1_icon-33" />
                          </td>
                          <td style={{ width: "60%" }}>New Citytours Tours</td>
                          <td style={{ width: "35%" }}>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_1"
                                id="option_1"
                                defaultChecked
                                defaultValue
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="icon_set_1_icon-6" />
                          </td>
                          <td>New Citytours Hotels</td>
                          <td>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_2"
                                id="option_2"
                                defaultValue
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="icon_set_1_icon-26" />
                          </td>
                          <td>New Citytours Transfers</td>
                          <td>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_3"
                                id="option_3"
                                defaultValue
                                defaultChecked
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="icon_set_1_icon-81" />
                          </td>
                          <td>New Citytours special offers</td>
                          <td>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_4"
                                id="option_4"
                                defaultValue
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="submit" className="btn_1 green">
                      Update notifications settings
                    </button>
                  </div>
                </div>
                {/* End row */}
              </section>
              {/* End section 3 */}
              <Profile />
            </div>
            {/* End content */}
          </div>
          {/* End tabs */}
        </div>
        {/* end container */}
      </main>
      {/* End main */}
    </>
  );
};

export default Admin;
