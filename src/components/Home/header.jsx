import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOG_OUT } from "../../redux/actionTypes";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user);
  const profileState = useSelector((state) => state.profile);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: LOG_OUT,
    });

    localStorage.clear();
    history.push("/");
  };

  const profileHandler = (e) => {
    e.preventDefault();

    if (profileState.auth === null) {
      history.push("/create_profile");
    } else {
      history.push("/profile");
    }
  };

  return (
    <>
      <div id="preloader">
        <div className="sk-spinner sk-spinner-wave">
          <div className="sk-rect1"></div>
          <div className="sk-rect2"></div>
          <div className="sk-rect3"></div>
          <div className="sk-rect4"></div>
          <div className="sk-rect5"></div>
        </div>
      </div>

      <div className="layer"></div>

      <header>
        <div id="top_line">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <i className="icon-phone"></i>
                <strong>+923444850952</strong>
              </div>
              <div className="col-6">
                <ul id="top_links">
                  {userId !== null && (
                    <li>
                      <Link to="/admin_dashboard" id="wishlist_link">
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {userId === null && (
                    <li>
                      <Link to="/login" id="access_link">
                        Log in
                      </Link>
                    </li>
                  )}
                  {userId === null && (
                    <li>
                      <Link to="/register" id="access_link">
                        Register
                      </Link>
                    </li>
                  )}
                  {userId !== null && (
                    <li>
                      <Link to="" id="access_link" onClick={profileHandler}>
                        Profile
                      </Link>
                    </li>
                  )}
                  {userId !== null && (
                    <li>
                      <Link to="/" id="access_link" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <div id="logo_home" style={{ fontFamily: "Lobster" }}>
                <h3 style={{ marginTop: "-4px", color: "black " }}>
                  <img
                    src="img/logo.png"
                    style={{ width: "30px", marginRight: "5px" }}
                    alt=""
                  />
                  {/* <a href="index.html" title="Travis Travels">
                  
                  </a> */}
                  Travis Travels
                </h3>
              </div>
            </div>
            <nav className="col-9">
              <a
                className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                href=""
              >
                <span>Menu mobile</span>
              </a>
              <div className="main-menu">
                <div id="header_menu">
                  <img
                    src="img/logo.png"
                    width="160"
                    height="34"
                    alt="City tours"
                    data-retina="true"
                  />
                </div>
                <a href="#" className="open_close" id="close_in">
                  <i className="icon_set_1_icon-77"></i>
                </a>
                <ul>
                  <li className="submenu">
                    <Link to="/" className="show-submenu">
                      Home 
                    </Link>
                  </li>
                  <li className="submenu">
                    <a href="" className="show-submenu">
                      Tours <i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_tours_list">All tours list</Link>
                      </li>
                      <li>
                        <Link to="/all_tours_grid">All tours grid</Link>
                      </li>
                      
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="" className="show-submenu">
                      Hotels <i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_hotels_list">All hotels list</Link>
                      </li>
                      <li>
                        <Link to="/all_hotels_grid">All hotels grid</Link>
                      </li>
                      
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="" className="show-submenu">
                      Transfers <i className="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_transfer_list">All transfers list</Link>
                      </li>
                      <li>
                        <Link to="/all_transfer_grid">All transfers grid</Link>
                      </li>
                                          </ul>
                  </li>
                  
                </ul>
              </div>
              <ul id="top_tools">
                <li>
                  <a href="" className="search-overlay-menu-btn">
                    <i className="icon_search"></i>
                  </a>
                </li>
                <li>
                  <div className="dropdown dropdown-cart">
                    <a href="#" data-toggle="dropdown" className="cart_bt">
                      <i className="icon_bag_alt"></i>
                      <strong>3</strong>
                    </a>
                    <ul className="dropdown-menu" id="cart_items">
                      <li>
                        <div className="image">
                          <img src="img/thumb_cart_1.jpg" alt="image" />
                        </div>
                        <strong>
                          <a href="#">Louvre museum</a>1x $36.00{" "}
                        </strong>
                        <a href="#" className="action">
                          <i className="icon-trash"></i>
                        </a>
                      </li>
                      <li>
                        <div className="image">
                          <img src="img/thumb_cart_2.jpg" alt="image" />
                        </div>
                        <strong>
                          <a href="#">Versailles tour</a>2x $36.00{" "}
                        </strong>
                        <a href="#" className="action">
                          <i className="icon-trash"></i>
                        </a>
                      </li>
                      <li>
                        <div className="image">
                          <img src="img/thumb_cart_3.jpg" alt="image" />
                        </div>
                        <strong>
                          <a href="#">Versailles tour</a>1x $36.00{" "}
                        </strong>
                        <a href="#" className="action">
                          <i className="icon-trash"></i>
                        </a>
                      </li>
                      <li>
                        <div>
                          Total: <span>$120.00</span>
                        </div>
                        <a href="cart.html" className="button_drop">
                          Go to cart
                        </a>
                        <a href="payment.html" className="button_drop outline">
                          Check out
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
