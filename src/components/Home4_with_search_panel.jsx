import React from "react";
import Footer from "./footer";
import Header from "./header";
import SignIn from "./SignIn";

const Home4_with_search_panel = () => {
  return (
    <>
      <Header />
      <section id="search_container">
        <div id="search">
          <ul className="nav nav-tabs">
            <li>
              <a href="#tours" data-toggle="tab" className="active show">
                Tours
              </a>
            </li>
            <li>
              <a href="#hotels" data-toggle="tab">
                Hotels
              </a>
            </li>
            <li>
              <a href="#transfers" data-toggle="tab">
                Transfers
              </a>
            </li>
            <li>
              <a href="#restaurants" data-toggle="tab">
                Restaurants
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="tours">
              <h3>Search Tours in Paris</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Search terms</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname_booking"
                      name="firstname_booking"
                      placeholder="Type your search terms"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Things to do</label>
                    <select
                      className="form-control ddslick"
                      name="category"
                      defaultValue="All Tours"
                    >
                      <option
                        value={0}
                        data-imagesrc="img/icons_search/all_tours.png"
                      >
                        All tours
                      </option>
                      <option
                        value={1}
                        data-imagesrc="img/icons_search/sightseeing.png"
                      >
                        City sightseeing
                      </option>
                      <option
                        value={2}
                        data-imagesrc="img/icons_search/museums.png"
                      >
                        Museum tours
                      </option>
                      <option
                        value={3}
                        data-imagesrc="img/icons_search/historic.png"
                      >
                        Historic Buildings
                      </option>
                      <option
                        value={4}
                        data-imagesrc="img/icons_search/walking.png"
                      >
                        Walking tours
                      </option>
                      <option
                        value={5}
                        data-imagesrc="img/icons_search/eat.png"
                      >
                        Eat &amp; Drink
                      </option>
                      <option
                        value={6}
                        data-imagesrc="img/icons_search/churches.png"
                      >
                        Churces
                      </option>
                      <option
                        value={7}
                        data-imagesrc="img/icons_search/skyline.png"
                      >
                        Skyline tours
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Date
                    </label>
                    <input
                      className="date-pick form-control"
                      data-date-format="M d, D"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className=" icon-clock" /> Time
                    </label>
                    <input
                      className="time-pick form-control"
                      defaultValue="12:00 AM"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-6">
                  <div className="form-group">
                    <label>Adults</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="adults"
                        className="qty2 form-control"
                        name="adults"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-6">
                  <div className="form-group">
                    <label>Children</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={0}
                        id="children"
                        className="qty2 form-control"
                        name="children"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <button className="btn_1 green">
                <i className="icon-search" />
                Search now
              </button>
            </div>
            {/* End rab */}
            <div className="tab-pane" id="hotels">
              <h3>Search Hotels in Paris</h3>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Check in
                    </label>
                    <input
                      className="date-pick form-control"
                      data-date-format="M d, D"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Check out
                    </label>
                    <input
                      className="date-pick form-control"
                      data-date-format="M d, D"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-6">
                  <div className="form-group">
                    <label>Adults</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="adults"
                        className="qty2 form-control"
                        name="adults_2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-6">
                  <div className="form-group">
                    <label>Children</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={0}
                        id="children"
                        className="qty2 form-control"
                        name="children_2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-12">
                  <div className="form-group">
                    <label>Rooms</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="children"
                        className="qty2 form-control"
                        name="rooms"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Hotel name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hotel_name"
                      name="hotel_name"
                      placeholder="Optionally type hotel name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Preferred city area</label>
                    <select
                      className="form-control"
                      name="area"
                      defaultValue="Centre"
                    >
                      <option value="Centre">Centre</option>
                      <option value="Gar du Nord Station">
                        Gar du Nord Station
                      </option>
                      <option value="La Defance">La Defance</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <button className="btn_1 green">
                <i className="icon-search" />
                Search now
              </button>
            </div>
            <div className="tab-pane" id="transfers">
              <h3>Search Transfers in Paris</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="select-label">Pick up location</label>
                    <select
                      className="form-control"
                      defaultValue="only_airport"
                    >
                      <option value="orly_airport">Orly airport</option>
                      <option value="gar_du_nord">Gar du Nord Station</option>
                      <option value="hotel_rivoli">Hotel Rivoli</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="select-label">Drop off location</label>
                    <select
                      className="form-control"
                      defaultValue="only_airport"
                    >
                      <option value="orly_airport">Orly airport</option>
                      <option value="gar_du_nord">Gar du Nord Station</option>
                      <option value="hotel_rivoli">Hotel Rivoli</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Date
                    </label>
                    <input
                      className="date-pick form-control"
                      data-date-format="M d, D"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className=" icon-clock" /> Time
                    </label>
                    <input
                      className="time-pick form-control"
                      defaultValue="12:00 AM"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3">
                  <div className="form-group">
                    <label>Adults</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="adults"
                        className="qty2 form-control"
                        name="quantity"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-9">
                  <div className="form-group">
                    <div className="radio_fix">
                      <label
                        className="radio-inline"
                        style={{ paddingLeft: 0 }}
                      >
                        <input
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option1"
                          defaultChecked
                        />{" "}
                        One Way
                      </label>
                    </div>
                    <div className="radio_fix">
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />{" "}
                        Return
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <button className="btn_1 green">
                <i className="icon-search" />
                Search now
              </button>
            </div>
            <div className="tab-pane" id="restaurants">
              <h3>Search Restaurants in Paris</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Search by name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="restaurant_name"
                      name="restaurant_name"
                      placeholder="Type your search terms"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Food type</label>
                    <select
                      className="form-control ddslick"
                      name="category_2"
                      defaultValue={0}
                    >
                      <option
                        value={0}
                        data-imagesrc="img/icons_search/all_restaurants.png"
                      >
                        All restaurants
                      </option>
                      <option
                        value={1}
                        data-imagesrc="img/icons_search/fast_food.png"
                      >
                        Fast food
                      </option>
                      <option
                        value={2}
                        data-imagesrc="img/icons_search/pizza_italian.png"
                      >
                        Pizza / Italian
                      </option>
                      <option
                        value={3}
                        data-imagesrc="img/icons_search/international.png"
                      >
                        International
                      </option>
                      <option
                        value={4}
                        data-imagesrc="img/icons_search/japanese.png"
                      >
                        Japanese
                      </option>
                      <option
                        value={5}
                        data-imagesrc="img/icons_search/chinese.png"
                      >
                        Chinese
                      </option>
                      <option
                        value={6}
                        data-imagesrc="img/icons_search/bar.png"
                      >
                        Coffee Bar
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Date
                    </label>
                    <input
                      className="date-pick form-control"
                      data-date-format="M d, D"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className=" icon-clock" /> Time
                    </label>
                    <input
                      className="time-pick form-control"
                      defaultValue="12:00 AM"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-6">
                  <div className="form-group">
                    <label>Adults</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={1}
                        id="adults"
                        className="qty2 form-control"
                        name="adults"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 col-6">
                  <div className="form-group">
                    <label>Children</label>
                    <div className="numbers-row">
                      <input
                        type="text"
                        defaultValue={0}
                        id="children"
                        className="qty2 form-control"
                        name="children"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <button className="btn_1 green">
                <i className="icon-search" />
                Search now
              </button>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Paris <span>Top</span> Tours
            </h2>
            <p>
              Quisque at tortor a libero posuere laoreet vitae sed arcu.
              Curabitur consequat.
            </p>
          </div>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.1s"
                key={num}
              >
                <div className="tour_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_tour.html">
                      <img
                        src={"./img/tour_box_1.jpg"}
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="image"
                      />
                      <div className="short_info">
                        <i className="icon_set_1_icon-44" />
                        Historic Buildings
                        <span className="price">
                          <sup>$</sup>39
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Arc Triomphe</strong> tour
                    </h3>
                    <div className="rating">
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile" />
                      <small>(75)</small>
                    </div>
                    {/* end rating */}
                    <div className="wishlist">
                      <a className="tooltip_flip tooltip-effect-1" href="">
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                  </div>
                </div>
                {/* End box tour */}
              </div>
            ))}
          </div>
          {/* End row */}
          <p className="text-center add_bottom_30">
            <a href="all_tours_list.html" className="btn_1 medium">
              <i className="icon-eye-7" />
              View all tours (144){" "}
            </a>
          </p>
          <hr />
          <div className="main_title">
            <h2>
              Paris <span>Top</span> Hotels
            </h2>
            <p>
              Quisque at tortor a libero posuere laoreet vitae sed arcu.
              Curabitur consequat.
            </p>
          </div>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.1s"
                key={num}
              >
                <div className="hotel_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src={"./img/hotel_1.jpg"}
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="image"
                      />
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
                    <div className="wishlist">
                      <a className="tooltip_flip tooltip-effect-1" href="#">
                        +
                        <span className="tooltip-content-flip">
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                  </div>
                </div>
                {/* End box */}
              </div>
            ))}
          </div>
          {/* End row */}
          <p className="text-center nopadding">
            <a href="all_hotels_list.html" className="btn_1 medium">
              <i className="icon-eye-7" />
              View all hotels (70){" "}
            </a>
          </p>
        </div>
        {/* End container */}
        <div className="white_bg">
          <div className="container margin_60">
            <div className="main_title">
              <h2>
                Other <span>Popular</span> tours
              </h2>
              <p>
                Quisque at tortor a libero posuere laoreet vitae sed arcu.
                Curabitur consequat.
              </p>
            </div>
            <div className="row add_bottom_45">
              <div className="col-lg-4 other_tours">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-3" />
                      Tour Eiffel
                      <span className="other_tours_price">$42</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-30" />
                      Shopping tour
                      <span className="other_tours_price">$35</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-44" />
                      Versailles tour
                      <span className="other_tours_price">$20</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-3" />
                      Montparnasse skyline
                      <span className="other_tours_price">$26</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-44" />
                      Pompidue<span className="other_tours_price">$26</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-3" />
                      Senna River tour
                      <span className="other_tours_price">$32</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 other_tours">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-1" />
                      Notredame<span className="other_tours_price">$48</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-4" />
                      Lafaiette<span className="other_tours_price">$55</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-30" />
                      Trocadero<span className="other_tours_price">$76</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-3" />
                      Open Bus tour
                      <span className="other_tours_price">$55</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-30" />
                      Louvre museum
                      <span className="other_tours_price">$24</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-3" />
                      Madlene Cathedral
                      <span className="other_tours_price">$24</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 other_tours">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-37" />
                      Montparnasse
                      <span className="other_tours_price">$36</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-1" />
                      D'Orsey museum
                      <span className="other_tours_price">$28</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-50" />
                      Gioconda Louvre musuem
                      <span className="other_tours_price">$44</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-44" />
                      Tour Eiffel
                      <span className="other_tours_price">$56</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-50" />
                      Ladefanse<span className="other_tours_price">$16</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-44" />
                      Notredame<span className="other_tours_price">$26</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End row */}
            <div className="banner colored">
              <h4>
                Discover our Top tours <span>from $34</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in.
              </p>
              <a href="single_tour.html" className="btn_1 white">
                Read more
              </a>
            </div>
            <div className="row">
              {[1, 2, 3, 4].map((num) => (
                <div className="col-lg-3 col-md-6 text-center" key={num}>
                  <p>
                    <a href="#">
                      <img
                        src={"./img/bus.jpg"}
                        alt="Pic"
                        className="img-fluid"
                      />
                    </a>
                  </p>
                  <h4>
                    <span>Sightseen tour</span> booking
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                    civibus efficiantur in. Nec id tempor imperdiet
                    deterruisset, doctus volumus explicari qui ex.
                  </p>
                </div>
              ))}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>
        {/* End white_bg */}
        <section className="promo_full">
          <div className="promo_full_wp magnific">
            <div>
              <h3>BELONG ANYWHERE</h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex.
              </p>
              <a
                href="https://www.youtube.com/watch?v=Zz5cu72Gv5Y"
                className="video"
              >
                <i className="icon-play-circled2-1" />
              </a>
            </div>
          </div>
        </section>
        {/* End section */}
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Some <span>good</span> reasons
            </h2>
            <p>
              Quisque at tortor a libero posuere laoreet vitae sed arcu.
              Curabitur consequat.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.2s">
              <div className="feature_home">
                <i className="icon_set_1_icon-41" />
                <h3>
                  <span>+120</span> Premium tours
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </p>
                <a href="about.html" className="btn_1 outline">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.4s">
              <div className="feature_home">
                <i className="icon_set_1_icon-30" />
                <h3>
                  <span>+1000</span> Customers
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </p>
                <a href="about.html" className="btn_1 outline">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="feature_home">
                <i className="icon_set_1_icon-57" />
                <h3>
                  <span>H24 </span> Support
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </p>
                <a href="about.html" className="btn_1 outline">
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/*End row */}
          <hr />
          <div className="row">
            <div className="col-md-6">
              <img
                src={"./img/laptop.png"}
                alt="Laptop"
                className="img-fluid laptop"
              />
            </div>
            <div className="col-md-6">
              <h3>
                <span>Get started</span> with CityTours
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset.
              </p>
              <ul className="list_order">
                <li>
                  <span>1</span>Select your preferred tours
                </li>
                <li>
                  <span>2</span>Purchase tickets and options
                </li>
                <li>
                  <span>3</span>Pick them directly from your office
                </li>
              </ul>
              <a href="all_tour_list.html" className="btn_1">
                Start now
              </a>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </main>

      {/* End main */}

      <Footer />
      {/* End footer */}

      <div id="toTop" />
      {/* Back to top button */}
      {/* Search Menu */}
      <div className="search-overlay-menu">
        <span className="search-overlay-close">
          <i className="icon_set_1_icon-77" />
        </span>
        <form role="search" id="searchform" method="get">
          <input defaultValue name="q" type="search" placeholder="Search..." />
          <button type="submit">
            <i className="icon_set_1_icon-78" />
          </button>
        </form>
      </div>
      {/* End Search Menu */}
      {/* Sign In Popup */}
      <SignIn />
    </>
  );
};

export default Home4_with_search_panel;
