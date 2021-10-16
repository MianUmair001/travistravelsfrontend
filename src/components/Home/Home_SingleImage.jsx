import React from "react";

const Home_SingleImage = () => {
  return (
    <>
      <section id="hero">
        <div class="intro_title">
          <h3 class="animated fadeInDown">Affordable Paris tours</h3>
          <p class="animated fadeInDown">
            City Tours / Tour Tickets / Tour Guides
          </p>
          <a href="#" class="animated fadeInUp button_intro">
            View Tours
          </a>
          <a href="#" class="animated fadeInUp button_intro outline">
            View Tickets
          </a>
        </div>
      </section>
      <main>
        {/* Hero Image */}
        {/* <div style={{ textAlign: "center" }}>
          <img src="./img/slides_bg/slide_8.jpg" alt="" />
        </div> */}

        {/* Slider */}

        {/* End layerslider */}

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
                <span>Get started</span> with TravisTravels
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
      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="small-dialog-header">
          <h3>Sign In</h3>
        </div>
        <form>
          <div className="sign-in-wrapper">
            <a href="#0" className="social_bt facebook">
              Login with Facebook
            </a>
            <a href="#0" className="social_bt google">
              Login with Google
            </a>
            <div className="divider">
              <span>Or</span>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                defaultValue
              />
              <i className="icon_lock_alt" />
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-left">
                <input id="remember-me" type="checkbox" name="check" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="float-right">
                <a id="forgot" href="">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="text-center">
              <input
                type="submit"
                defaultValue="Log In"
                className="btn_login"
              />
            </div>
            <div className="text-center">
              Don’t have an account? <a href="">Sign up</a>
            </div>
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input
                  type="email"
                  className="form-control"
                  name="email_forgot"
                  id="email_forgot"
                />
                <i className="icon_mail_alt" />
              </div>
              <p>
                You will receive an email containing a link allowing you to
                reset your password to a new preferred one.
              </p>
              <div className="text-center">
                <input
                  type="submit"
                  defaultValue="Reset Password"
                  className="btn_1"
                />
              </div>
            </div>
          </div>
        </form>
        {/*form */}
      </div>
    </>
  );
};

export default Home_SingleImage;
