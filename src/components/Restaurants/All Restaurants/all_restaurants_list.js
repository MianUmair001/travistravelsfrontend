import React from "react";
import { Link } from "react-router-dom";

const All_restaurants_list = () => {
  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/restaurant_top.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Paris restaurants</h1>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
          </div>
        </div>
      </section>
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
        {/* Position */}
        <div className="collapse" id="collapseMap">
          <div id="map" className="map" />
        </div>
        {/* End Map */}
        <div className="container margin_60">
          <div className="row">
            <aside className="col-lg-3">
              <p>
                <a
                  className="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                >
                  View on map
                </a>
              </p>
              <div className="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <a href="#" id="active">
                      <i className="icon_set_3_restaurant-10" />
                      All restaurants <span>(141)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-1" />
                      Pizza / Italian <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-2" />
                      Fast Food <span>(16)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-3" />
                      Japanese <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-4" />
                      Chinese <span>(11)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-5" />
                      International <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-8" />
                      Coffe bar <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_3_restaurant-7" />
                      Fish <span>(08)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="filters_col">
                <a
                  data-toggle="collapse"
                  href="#collapseFilters"
                  aria-expanded="false"
                  aria-controls="collapseFilters"
                  id="filters_col_bt"
                >
                  <i className="icon_set_1_icon-65" />
                  Filters
                </a>
                <div className="collapse show" id="collapseFilters">
                  <div className="filter_type">
                    <h6>Price</h6>
                    <input type="text" id="range" name="range" defaultValue />
                  </div>
                  <div className="filter_type">
                    <h6>Rating</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filter_type">
                    <h6>District/Area</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />
                          Paris Centre
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          La Defance
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          Latin Quarter
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End collapse */}
              </div>
              {/*End filters col*/}
              <div className="box_style_2">
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
            {/*End aside */}
            <div className="col-lg-9">
              <div id="tools">
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-6">
                    <div className="styled-select-filters">
                      <select name="sort_price" id="sort_price">
                        <option value selected>
                          Sort by price
                        </option>
                        <option value="lower">Lowest price</option>
                        <option value="higher">Highest price</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-6">
                    <div className="styled-select-filters">
                      <select name="sort_rating" id="sort_rating">
                        <option value selected>
                          Sort by ranking
                        </option>
                        <option value="lower">Lowest ranking</option>
                        <option value="higher">Highest ranking</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 d-none d-sm-block text-right">
                    <Link to="/all_restaurants_grid" className="bt_filters">
                      <i className="icon-th" />
                    </Link>
                    <Link to="all_restaurants_list" className="bt_filters">
                      <i className="icon-list" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*/tools */}
              <div
                className="strip_all_tour_list wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="ribbon_3 popular">
                      <span>Popular</span>
                    </div>
                    <div className="wishlist">
                      <a
                        className="tooltip_flip tooltip-effect-1"
                        href="javascript:void(0);"
                      >
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    <div className="img_list">
                      <a href="single_restaurant.html">
                        <img src="img/restaurant_box_1.jpg" alt="Image" />
                        <div className="short_info">
                          <i className="icon_set_3_restaurant-2" /> Fast food
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile" />
                        <small>(75)</small>
                      </div>
                      <h3>
                        <strong>King food</strong> restaurant
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, quem convenire interesset ut
                        vix, ad dicat sanctus detracto vis. Eos modus dolorum
                        ex, qui adipisci maiestatis inciderint no, eos in elit
                        dicat.....
                      </p>
                      <ul className="add_info">
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-13" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Disabled</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-47" />
                            </span>
                            <div className="tooltip-content">
                              <h4>No smoking area</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-27" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Parking</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-25" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Transport</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                      <div>
                        <sup>$</sup>39*
                        <span className="normal_price_list">$99</span>
                        <small>*Per person</small>
                        <p>
                          <a href="single_restaurant.html" className="btn_1">
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End strip */}
              <div
                className="strip_all_tour_list wow fadeIn"
                data-wow-delay="0.2s"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="ribbon_3 popular">
                      <span>Popular</span>
                    </div>
                    <div className="wishlist">
                      <a
                        className="tooltip_flip tooltip-effect-1"
                        href="javascript:void(0);"
                      >
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    <div className="img_list">
                      <a href="single_restaurant.html">
                        <img src="img/restaurant_box_2.jpg" alt="Image" />
                        <div className="short_info">
                          <i className="icon_set_3_restaurant-2" /> Fast food
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile" />
                        <small>(75)</small>
                      </div>
                      <h3>
                        <strong>Catrine</strong> restaurant
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, quem convenire interesset ut
                        vix, ad dicat sanctus detracto vis. Eos modus dolorum
                        ex, qui adipisci maiestatis inciderint no, eos in elit
                        dicat.....
                      </p>
                      <ul className="add_info">
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-13" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Disabled</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-47" />
                            </span>
                            <div className="tooltip-content">
                              <h4>No smoking area</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-27" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Parking</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-25" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Transport</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                      <div>
                        <sup>$</sup>42*
                        <span className="normal_price_list">$99</span>
                        <small>*Per person</small>
                        <p>
                          <a href="single_restaurant.html" className="btn_1">
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End strip */}
              <div
                className="strip_all_tour_list wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="ribbon_3 popular">
                      <span>Popular</span>
                    </div>
                    <div className="wishlist">
                      <a
                        className="tooltip_flip tooltip-effect-1"
                        href="javascript:void(0);"
                      >
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    <div className="img_list">
                      <a href="single_restaurant.html">
                        <img src="img/restaurant_box_3.jpg" alt="Image" />
                        <div className="short_info">
                          <i className="icon_set_3_restaurant-1" /> Pizza /
                          Italian
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile" />
                        <small>(75)</small>
                      </div>
                      <h3>
                        <strong>Bella Napoli</strong> restaurant
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, quem convenire interesset ut
                        vix, ad dicat sanctus detracto vis. Eos modus dolorum
                        ex, qui adipisci maiestatis inciderint no, eos in elit
                        dicat.....
                      </p>
                      <ul className="add_info">
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-13" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Disabled</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-47" />
                            </span>
                            <div className="tooltip-content">
                              <h4>No smoking area</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-27" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Parking</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-25" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Transport</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                      <div>
                        <sup>$</sup>39*
                        <span className="normal_price_list">$99</span>
                        <small>*Per person</small>
                        <p>
                          <a href="single_restaurant.html" className="btn_1">
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End strip */}
              <div
                className="strip_all_tour_list wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="ribbon_3">
                      <span>Top rated</span>
                    </div>
                    <div className="wishlist">
                      <a
                        className="tooltip_flip tooltip-effect-1"
                        href="javascript:void(0);"
                      >
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    <div className="img_list">
                      <a href="single_restaurant.html">
                        <img src="img/restaurant_box_4.jpg" alt="Image" />
                        <div className="short_info">
                          <i className="icon_set_3_restaurant-4" /> Chinese
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile" />
                        <small>(75)</small>
                      </div>
                      <h3>
                        <strong>Dragon tower</strong> restaurant
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, quem convenire interesset ut
                        vix, ad dicat sanctus detracto vis. Eos modus dolorum
                        ex, qui adipisci maiestatis inciderint no, eos in elit
                        dicat.....
                      </p>
                      <ul className="add_info">
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-13" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Disabled</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-47" />
                            </span>
                            <div className="tooltip-content">
                              <h4>No smoking area</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-27" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Parking</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-25" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Transport</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                      <div>
                        <sup>$</sup>69*
                        <span className="normal_price_list">$59</span>
                        <small>*Per person</small>
                        <p>
                          <a href="single_restaurant.html" className="btn_1">
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End strip */}
              <div
                className="strip_all_tour_list wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="ribbon_3">
                      <span>Top rated</span>
                    </div>
                    <div className="wishlist">
                      <a
                        className="tooltip_flip tooltip-effect-1"
                        href="javascript:void(0);"
                      >
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    <div className="img_list">
                      <a href="single_restaurant.html">
                        <img src="img/restaurant_box_5.jpg" alt="Image" />
                        <div className="short_info">
                          <i className="icon_set_3_restaurant-7" /> Fish
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile" />
                        <small>(75)</small>
                      </div>
                      <h3>
                        <strong>Sea food</strong> restaurant
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, quem convenire interesset ut
                        vix, ad dicat sanctus detracto vis. Eos modus dolorum
                        ex, qui adipisci maiestatis inciderint no, eos in elit
                        dicat.....
                      </p>
                      <ul className="add_info">
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-13" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Disabled</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-47" />
                            </span>
                            <div className="tooltip-content">
                              <h4>No smoking area</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-27" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Parking</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-25" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Transport</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                      <div>
                        <sup>$</sup>49*
                        <span className="normal_price_list">$59</span>
                        <small>*Per person</small>
                        <p>
                          <a href="single_restaurant.html" className="btn_1">
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End strip */}
              <div
                className="strip_all_tour_list wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="ribbon_3">
                      <span>Top rated</span>
                    </div>
                    <div className="wishlist">
                      <a
                        className="tooltip_flip tooltip-effect-1"
                        href="javascript:void(0);"
                      >
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    <div className="img_list">
                      <a href="single_restaurant.html">
                        <img src="img/restaurant_box_6.jpg" alt="Image" />
                        <div className="short_info">
                          <i className="icon_set_3_restaurant-5" />{" "}
                          International
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile  voted" />
                        <i className="icon-smile" />
                        <small>(75)</small>
                      </div>
                      <h3>
                        <strong>Alfredo</strong> restaurant
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, quem convenire interesset ut
                        vix, ad dicat sanctus detracto vis. Eos modus dolorum
                        ex, qui adipisci maiestatis inciderint no, eos in elit
                        dicat.....
                      </p>
                      <ul className="add_info">
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-13" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Disabled</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-47" />
                            </span>
                            <div className="tooltip-content">
                              <h4>No smoking area</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-27" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Parking</h4> Usu in novum nostrud disputando,
                              ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="tooltip_styled tooltip-effect-4">
                            <span className="tooltip-item">
                              <i className="icon_set_1_icon-25" />
                            </span>
                            <div className="tooltip-content">
                              <h4>Transport</h4> Usu in novum nostrud
                              disputando, ei quo aperiri omittam vidit fastidii.
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                      <div>
                        <sup>$</sup>49*
                        <span className="normal_price_list">$59</span>
                        <small>*Per person</small>
                        <p>
                          <a href="single_restaurant.html" className="btn_1">
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End strip */}
              <hr />
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">??</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      1<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">??</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* end pagination*/}
            </div>
            {/* End col lg-9 */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </main>
      {/* End main */}
    </>
  );
};

export default All_restaurants_list;
