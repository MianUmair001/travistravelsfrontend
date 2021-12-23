import React from "react";

const Cart_fixed_sidebar = () => {
  return (
    <>
      <main>
        
        {/* End position */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8">
              <table className="table table-striped cart-list add_bottom_30">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img src="img/thumb_cart_1.jpg" alt="Image" />
                      </div>
                      <span className="item_cart">Louvre Museum tickets</span>
                    </td>
                    <td>
                      <div className="numbers-row">
                        <input
                          type="text"
                          defaultValue={1}
                          id="quantity_1"
                          className="qty2 form-control"
                          name="quantity_1"
                        />
                      </div>
                    </td>
                    <td>0%</td>
                    <td>
                      <strong>€24,71</strong>
                    </td>
                    <td className="options">
                      <a href="#">
                        <i className=" icon-trash" />
                      </a>
                      <a href="#">
                        <i className="icon-ccw-2" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img src="img/thumb_cart_1.jpg" alt="Image" />
                      </div>
                      <span className="item_cart">Eiffell tour</span>
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
                    <td>0%</td>
                    <td>
                      <strong>€0,0</strong>
                    </td>
                    <td className="options">
                      <a href="#">
                        <i className=" icon-trash" />
                      </a>
                      <a href="#">
                        <i className="icon-ccw-2" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img src="img/thumb_cart_1.jpg" alt="Image" />
                      </div>
                      <span className="item_cart">Senna river Tour</span>
                    </td>
                    <td>
                      <div className="numbers-row">
                        <input
                          type="text"
                          defaultValue={1}
                          id="quantity_3"
                          className="qty2 form-control"
                          name="quantity_3"
                        />
                      </div>
                    </td>
                    <td>0%</td>
                    <td>
                      <strong>€24,71</strong>
                    </td>
                    <td className="options">
                      <a href="#">
                        <i className=" icon-trash" />
                      </a>
                      <a href="#">
                        <i className="icon-ccw-2" />
                      </a>
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
                    <td style={{ width: "10%" }}>
                      <i className="icon_set_1_icon-16" />
                    </td>
                    <td style={{ width: "60%" }}>
                      Dedicated Tour guide <strong>+$34</strong>
                    </td>
                    <td style={{ width: "35%" }}>
                      <label className="switch-light switch-ios float-right">
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
                      <i className="icon_set_1_icon-71" />
                    </td>
                    <td>
                      Insurance <strong>+$24*</strong>
                    </td>
                    <td>
                      <label className="switch-light switch-ios float-right">
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
            {/* End col-md-8 */}
            <aside className="col-lg-4" id="sidebar">
              <div className="theiaStickySidebar">
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
                  <a className="btn_full" href="payment_fixed_sidebar.html">
                    Check out
                  </a>
                  <a className="btn_full_outline" href="#">
                    <i className="icon-right" /> Continue shopping
                  </a>
                </div>
              </div>
              {/* End sitcky */}
            </aside>
            {/* End aside */}
          </div>
          {/*End row */}
        </div>
        {/*End container */}
      </main>
      {/* End main */}
    </>
  );
};

export default Cart_fixed_sidebar;
