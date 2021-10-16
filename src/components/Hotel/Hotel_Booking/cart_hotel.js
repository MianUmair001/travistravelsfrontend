import React from "react";

const Cart_hotel = () => {
  return (
    <>
      <div>
        <section id="hero_2">
          <div className="intro_title">
            <h1>Place your order</h1>
            <div className="bs-wizard row">
              <div className="col-4 bs-wizard-step active">
                <div className="text-center bs-wizard-stepnum">Your cart</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <a href="#" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">
                  Your details
                </div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <a href="payment_hotel.html" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">Finish!</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <a href="confirmation_hotel.html" className="bs-wizard-dot" />
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
              <div className="col-lg-8">
                <div className="alert alert-info" role="alert">
                  <strong>Rooms available</strong> for the selected dates.
                  <br />
                  PLEASE SELECT YOUR QUANTITY.
                </div>
                <table className="table table-striped cart-list add_bottom_30">
                  <thead>
                    <tr>
                      <th>Room Type</th>
                      <th>Quantity</th>
                      <th>Per night</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="thumb_cart">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_single_room"
                          >
                            <img src="img/thumb_cart_1.jpg" alt="Image" />
                          </a>
                        </div>
                        <span className="item_cart">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_single_room"
                          >
                            Single Room
                          </a>
                        </span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <input
                            type="text"
                            defaultValue={0}
                            id="quantity_1"
                            className="qty2 form-control"
                            name="quantity_1"
                          />
                        </div>
                      </td>
                      <td>
                        <strong>€80</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="thumb_cart">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_double_room"
                          >
                            <img src="img/thumb_cart_1.jpg" alt="Image" />
                          </a>
                        </div>
                        <span className="item_cart">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal_double_room"
                          >
                            Double room
                          </a>
                        </span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <input
                            type="text"
                            defaultValue={0}
                            id="quantity_2"
                            className="qty2 form-control"
                            name="quantity_2"
                          />
                        </div>
                      </td>
                      <td>
                        <strong>€130</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-striped options_cart">
                  <thead>
                    <tr>
                      <th colSpan={3}>Add options / Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i className="icon_set_1_icon-26" />
                      </td>
                      <td>
                        Pick up service <strong>+$34*</strong>
                      </td>
                      <td>
                        <label className="switch-light switch-ios float-right">
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
                        <i className="icon_set_1_icon-15" />
                      </td>
                      <td>
                        Welcome bottle <strong>+$24</strong>
                      </td>
                      <td>
                        <label className="switch-light switch-ios float-right">
                          <input
                            type="checkbox"
                            name="option_4"
                            id="option_4"
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
                        <i className="icon_set_1_icon-59" />
                      </td>
                      <td>
                        Coffe break <strong>+$12*</strong>
                      </td>
                      <td>
                        <label className="switch-light switch-ios float-right">
                          <input
                            type="checkbox"
                            name="option_5"
                            id="option_5"
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
                        <i className="icon_set_1_icon-58" />
                      </td>
                      <td>
                        Dinner <strong>+$26*</strong>
                      </td>
                      <td>
                        <label className="switch-light switch-ios float-right">
                          <input
                            type="checkbox"
                            name="option_6"
                            id="option_6"
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
                        <i className="icon_set_1_icon-40" />
                      </td>
                      <td>
                        Bike rent <strong>+$26*</strong>
                      </td>
                      <td>
                        <label className="switch-light switch-ios float-right">
                          <input
                            type="checkbox"
                            name="option_7"
                            id="option_7"
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
                <div className="add_bottom_15">
                  <small>* Prices for person.</small>
                </div>
              </div>
              {/* End col-lg-8 */}
              <aside className="col-lg-4">
                <div className="box_style_1">
                  <h3 className="inner">- Summary -</h3>
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>Check in</td>
                        <td className="text-right">10 April 2015</td>
                      </tr>
                      <tr>
                        <td>Check out</td>
                        <td className="text-right">12 April 2015</td>
                      </tr>
                      <tr>
                        <td>Rooms</td>
                        <td className="text-right">1 double room</td>
                      </tr>
                      <tr>
                        <td>Nights</td>
                        <td className="text-right">2</td>
                      </tr>
                      <tr>
                        <td>Adults</td>
                        <td className="text-right">2</td>
                      </tr>
                      <tr>
                        <td>Children</td>
                        <td className="text-right">0</td>
                      </tr>
                      <tr>
                        <td>Welcome bottle</td>
                        <td className="text-right">$34</td>
                      </tr>
                      <tr className="total">
                        <td>Total cost</td>
                        <td className="text-right">$154</td>
                      </tr>
                    </tbody>
                  </table>
                  <a className="btn_full" href="payment_hotel.html">
                    Book now
                  </a>
                  <a className="btn_full_outline" href="single_hotel.html">
                    <i className="icon-right" /> Modify your search
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
              {/* End aside */}
            </div>
            {/*End row */}
          </div>
          {/*End container */}
        </main>
        {/* End main */}
      </div>
    </>
  );
};

export default Cart_hotel;
