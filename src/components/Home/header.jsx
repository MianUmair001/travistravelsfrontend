import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOG_OUT } from "../../redux/actionTypes";
import { useHistory } from "react-router-dom";
import { getAllHotels } from "../../redux/actions/hotels.action";

export const HotelListContext = React.createContext();

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user);
  // console.log("user Now", userId);
  const profileState = useSelector((state) => state.profile);
  // console.log("user profileState", profileState);

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

  // const hanldeAllHotelList = async (e) => {
  //   e.preventDefault();

  //   const allHotelsList = await dispatch(getAllHotels());

  //   history.push("/all_hotels_list");
  //   // return allHotelsList;
  // };

  return (
    <>
      <div id="preloader">
        <div class="sk-spinner sk-spinner-wave">
          <div class="sk-rect1"></div>
          <div class="sk-rect2"></div>
          <div class="sk-rect3"></div>
          <div class="sk-rect4"></div>
          <div class="sk-rect5"></div>
        </div>
      </div>

      <div class="layer"></div>

      <header>
        <div id="top_line">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <i class="icon-phone"></i>
                <strong>+923444850952</strong>
              </div>
              <div class="col-6">
                <ul id="top_links">
                  <li>
                    <a href="wishlist.html" id="wishlist_link">
                      Wishlist
                    </a>
                  </li>
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

        <div class="container">
          <div class="row">
            <div class="col-3">
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
            <nav class="col-9">
              <a
                class="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                href=""
              >
                <span>Menu mobile</span>
              </a>
              <div class="main-menu">
                <div id="header_menu">
                  <img
                    src="img/logo.png"
                    width="160"
                    height="34"
                    alt="City tours"
                    data-retina="true"
                  />
                </div>
                <a href="#" class="open_close" id="close_in">
                  <i class="icon_set_1_icon-77"></i>
                </a>
                <ul>
                  <li class="submenu">
                    <Link to="/" class="show-submenu">
                      Home <i class="icon-down-open-mini"></i>
                    </Link>
                    <ul>
                      <li>
                        <a href="">Revolution slider</a>
                        <ul>
                          <li>
                            <a href="index.html">Default slider</a>
                          </li>
                          <li>
                            <a href="index_20.html">Basic slider</a>
                          </li>
                          <li>
                            <a href="index_14.html">Youtube Hero</a>
                          </li>
                          <li>
                            <a href="index_15.html">Vimeo Hero</a>
                          </li>
                          <li>
                            <a href="index_17.html">Youtube 4K</a>
                          </li>
                          <li>
                            <a href="index_16.html">Carousel</a>
                          </li>
                          <li>
                            <a href="index_19.html">Mailchimp Newsletter</a>
                          </li>
                          <li>
                            <a href="index_18.html">Fixed Caption</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index_12.html">Layer slider</a>
                      </li>
                      <li>
                        <a href="index_2.html">With Only tours</a>
                      </li>
                      <li>
                        <a href="index_3.html">Single image</a>
                      </li>
                      <li>
                        <a href="index_4.html">Header video</a>
                      </li>
                      <li>
                        <a href="index_7.html">With search panel</a>
                      </li>
                      <li>
                        <a href="index_13.html">With tabs</a>
                      </li>
                      <li>
                        <a href="index_5.html">With map</a>
                      </li>
                      <li>
                        <a href="index_6.html">With search bar</a>
                      </li>
                      <li>
                        <a href="index_8.html">Search bar + Video</a>
                      </li>
                      <li>
                        <a href="index_9.html">With Text Rotator</a>
                      </li>
                      <li>
                        <a href="index_10.html">With Cookie Bar (EU law)</a>
                      </li>
                      <li>
                        <a href="index_11.html">Popup Advertising</a>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu">
                    <a href="" class="show-submenu">
                      Tours <i class="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_tours_list">All tours list</Link>
                      </li>
                      <li>
                        <Link to="/all_tours_grid">All tours grid</Link>
                      </li>
                      <li>
                        <Link to="/all_tours_map_listing">
                          All tours map listing
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_tour">Single tour page</Link>
                      </li>
                      <li>
                        <Link to="/single_tour_gallary">
                          Single tour with gallery
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_tour_working_booking">
                          Single tour fixed sidebar
                        </Link>
                        <ul>
                          <li>
                            <Link to="/single_tour_fixed_sidebar">
                              Single tour fixed sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/single_tour_fixed_sidebar_2">
                              Single tour 2 Fixed Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/cart_fixed_sidebar">
                              Cart Fixed Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/payment_fixed_sidebar">
                              Payment Fixed Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="confirmation_fixed_sidebar">
                              Confirmation Fixed Sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/single_tour_working_booking">
                          Single tour working booking
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_tour_datepicker">
                          Date and time picker V2
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_tour_cart">Single tour cart</Link>
                      </li>
                      <li>
                        <Link to="/single_tour_booking">
                          Single tour booking
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu">
                    <a href="" class="show-submenu">
                      Hotels <i class="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_hotels_list">All hotels list</Link>
                      </li>
                      <li>
                        <Link to="/all_hotels_grid">All hotels grid</Link>
                      </li>
                      <li>
                        <Link to="/all_hotels_map_listing">
                          All hotels map listing
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_hotel">Single hotel page</Link>
                      </li>
                      <li>
                        <Link to="/single_hotel_datepicker_adv">
                          Single hotel datepicker adv
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_hotel_datepicker_v2">
                          Date and time picker V2
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_hotel_working_booking">
                          Single hotel working booking
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_hotel_contact">
                          Single hotel contact working
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart_hotel">Cart hotel</Link>
                      </li>
                      <li>
                        <a href="payment_hotel.html">Booking hotel</a>
                      </li>
                      <li>
                        <Link to="/confirmation_hotel">Confirmation hotel</Link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu">
                    <a href="" class="show-submenu">
                      Transfers <i class="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_transfer_list">All transfers list</Link>
                      </li>
                      <li>
                        <Link to="/all_transfer_grid">All transfers grid</Link>
                      </li>
                      <li>
                        <Link to="/single_transfer">Single transfer page</Link>
                      </li>
                      <li>
                        <Link to="/single_transfer_datepicker">
                          Date and time picker V2
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart_transfer">Cart transfers</Link>
                      </li>
                      <li>
                        <Link to="/payment_transfer">Booking transfers</Link>
                      </li>
                      <li>
                        <Link to="/confirmation_transfer">
                          Confirmation transfers
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="submenu">
                    <a href="" class="show-submenu">
                      Restaurants <i class="icon-down-open-mini"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/all_restaurants_list">
                          All restaurants list
                        </Link>
                      </li>
                      <li>
                        <Link to="/all_restaurants_grid">
                          All restaurants grid
                        </Link>
                      </li>
                      <li>
                        <Link to="/all_restaurants_map_listing">
                          All restaurants map listing
                        </Link>
                      </li>
                      <li>
                        <Link to="/single_restaurant">
                          Single restaurant page
                        </Link>
                      </li>
                      <li>
                        <Link to="single_restaurant_datepicker_v2">
                          Date and time picker V2
                        </Link>
                      </li>
                      <li>
                        <Link to="/booking_restaurant">Booking restaurant</Link>
                      </li>
                      <li>
                        <Link to="/confirm_transfer">
                          Confirmation transfers
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="megamenu submenu">
                    <a href="" class="show-submenu-mega">
                      Bonus<i class="icon-down-open-mini"></i>
                    </a>
                    <div class="menu-wrapper">
                      <div class="row">
                        <div class="col-lg-4">
                          <h3>Header styles</h3>
                          <ul>
                            <li>
                              <a href="index.html">Default transparent</a>
                            </li>
                            <li>
                              <a href="header_2.html">Plain color</a>
                            </li>
                            <li>
                              <a href="header_3.html">Plain color on scroll</a>
                            </li>
                            <li>
                              <a href="header_4.html">With socials on top</a>
                            </li>
                            <li>
                              <a href="header_5.html">
                                With language selection
                              </a>
                            </li>
                            <li>
                              <a href="header_6.html">
                                With lang and conversion
                              </a>
                            </li>
                            <li>
                              <a href="header_7.html">
                                With full horizontal menu
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <h3>Footer styles</h3>
                          <ul>
                            <li>
                              <a href="index.html">Footer default</a>
                            </li>
                            <li>
                              <a href="footer_2.html">Footer style 2</a>
                            </li>
                            <li>
                              <a href="footer_3.html">Footer style 3</a>
                            </li>
                            <li>
                              <a href="footer_4.html">Footer style 4</a>
                            </li>
                            <li>
                              <a href="footer_5.html">Footer style 5</a>
                            </li>
                            <li>
                              <a href="footer_6.html">Footer style 6</a>
                            </li>
                            <li>
                              <a href="footer_7.html">Footer style 7</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <h3>Shop section</h3>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-single.html">Shop single</a>
                            </li>
                            <li>
                              <a href="shopping-cart.html">Shop cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Shop Checkout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="megamenu submenu">
                    <a href="" class="show-submenu-mega">
                      Pages<i class="icon-down-open-mini"></i>
                    </a>
                    <div class="menu-wrapper">
                      <div class="row">
                        <div class="col-lg-4">
                          <h3>Pages</h3>
                          <ul>
                            <li>
                              <a href="about.html">About us</a>
                            </li>
                            <li>
                              <a href="general_page.html">General page</a>
                            </li>
                            <li>
                              <a href="tourist_guide.html">Tourist guide</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist page</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="faq_2.html">Faq smooth scroll</a>
                            </li>
                            <li>
                              <a href="pricing_tables.html">Pricing tables</a>
                            </li>
                            <li>
                              <a href="gallery_3_columns.html">
                                Gallery 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="gallery_4_columns.html">
                                Gallery 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="grid_gallery_1.html">Grid gallery</a>
                            </li>
                            <li>
                              <a href="grid_gallery_2.html">
                                Grid gallery with filters
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <h3>Pages</h3>
                          <ul>
                            <li>
                              <a href="contact_us_1.html">Contact us 1</a>
                            </li>
                            <li>
                              <a href="contact_us_2.html">Contact us 2</a>
                            </li>
                            <li>
                              <a href="blog_right_sidebar.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog left sidebar</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                            <li>
                              <a href="invoice.html" target="_blank">
                                Invoice
                              </a>
                            </li>
                            <li>
                              <a href="404.html">404 Error page</a>
                            </li>
                            <li>
                              <a href="site_launch/index.html">
                                Site launch / Coming soon
                              </a>
                            </li>
                            <li>
                              <a href="timeline.html">Tour timeline</a>
                            </li>
                            <li>
                              <a href="page_with_map.html">
                                <i class="icon-map"></i> Full screen map
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-4">
                          <h3>Elements</h3>
                          <ul>
                            <li>
                              <a href="footer_2.html">
                                <i class="icon-columns"></i> Footer with working
                                newsletter
                              </a>
                            </li>
                            <li>
                              <a href="footer_5.html">
                                <i class="icon-columns"></i> Footer with Twitter
                                feed
                              </a>
                            </li>
                            <li>
                              <a href="icon_pack_1.html">
                                <i class="icon-inbox-alt"></i> Icon pack 1
                                (1900)
                              </a>
                            </li>
                            <li>
                              <a href="icon_pack_2.html">
                                <i class="icon-inbox-alt"></i> Icon pack 2 (100)
                              </a>
                            </li>
                            <li>
                              <a href="icon_pack_3.html">
                                <i class="icon-inbox-alt"></i> Icon pack 3 (30)
                              </a>
                            </li>
                            <li>
                              <a href="icon_pack_4.html">
                                <i class="icon-inbox-alt"></i> Icon pack 4 (200)
                              </a>
                            </li>
                            <li>
                              <a href="icon_pack_5.html">
                                <i class="icon-inbox-alt"></i> Icon pack 5 (360)
                              </a>
                            </li>
                            <li>
                              <a href="shortcodes.html">
                                <i class="icon-tools"></i> Shortcodes
                              </a>
                            </li>
                            <li>
                              <a
                                href="newsletter_template/newsletter.html"
                                target="blank"
                              >
                                <i class=" icon-mail"></i> Responsive email
                                template
                              </a>
                            </li>
                            <li>
                              <a href="admin.html">
                                <i class="icon-cog-1"></i> Admin area
                              </a>
                            </li>
                            <li>
                              <a href="general_page.html">
                                <i class="icon-light-up"></i> Weather Forecast
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ul id="top_tools">
                <li>
                  <a href="" class="search-overlay-menu-btn">
                    <i class="icon_search"></i>
                  </a>
                </li>
                <li>
                  <div class="dropdown dropdown-cart">
                    <a href="#" data-toggle="dropdown" class="cart_bt">
                      <i class="icon_bag_alt"></i>
                      <strong>3</strong>
                    </a>
                    <ul class="dropdown-menu" id="cart_items">
                      <li>
                        <div class="image">
                          <img src="img/thumb_cart_1.jpg" alt="image" />
                        </div>
                        <strong>
                          <a href="#">Louvre museum</a>1x $36.00{" "}
                        </strong>
                        <a href="#" class="action">
                          <i class="icon-trash"></i>
                        </a>
                      </li>
                      <li>
                        <div class="image">
                          <img src="img/thumb_cart_2.jpg" alt="image" />
                        </div>
                        <strong>
                          <a href="#">Versailles tour</a>2x $36.00{" "}
                        </strong>
                        <a href="#" class="action">
                          <i class="icon-trash"></i>
                        </a>
                      </li>
                      <li>
                        <div class="image">
                          <img src="img/thumb_cart_3.jpg" alt="image" />
                        </div>
                        <strong>
                          <a href="#">Versailles tour</a>1x $36.00{" "}
                        </strong>
                        <a href="#" class="action">
                          <i class="icon-trash"></i>
                        </a>
                      </li>
                      <li>
                        <div>
                          Total: <span>$120.00</span>
                        </div>
                        <a href="cart.html" class="button_drop">
                          Go to cart
                        </a>
                        <a href="payment.html" class="button_drop outline">
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
