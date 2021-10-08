import React from "react";

const Page_404 = () => {
  return (
    <div>
      <div>
        <section id="hero">
          <div className="intro_title error">
            <h1 className="animated fadeInDown">404</h1>
            <p className="animated fadeInDown">Oops!! Page not found</p>
            <a href="index.html" className="animated fadeInUp button_intro">
              Back to home
            </a>{" "}
            <a
              href="all_tours_list.html"
              className="animated fadeInUp button_intro outline"
            >
              View all tours
            </a>
          </div>
        </section>
        {/* End hero */}
        <main>
          <div className="container margin_60">
            <div className="banner colored add_bottom_30">
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
              <div className="col-lg-3 col-md-6 text-center">
                <p>
                  <a href="#">
                    <img src="img/bus.jpg" alt="Pic" className="img-fluid" />
                  </a>
                </p>
                <h4>
                  <span>Sightseen tour</span> booking
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                  doctus volumus explicari qui ex.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <p>
                  <a href="#">
                    <img
                      src="img/transfer.jpg"
                      alt="Pic"
                      className="img-fluid"
                    />
                  </a>
                </p>
                <h4>
                  <span>Transfer</span> booking
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                  doctus volumus explicari qui ex.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <p>
                  <a href="#">
                    <img src="img/guide.jpg" alt="Pic" className="img-fluid" />
                  </a>
                </p>
                <h4>
                  <span>Tour guide</span> booking
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                  doctus volumus explicari qui ex.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <p>
                  <a href="#">
                    <img src="img/hotel.jpg" alt="Pic" className="img-fluid" />
                  </a>
                </p>
                <h4>
                  <span>Hotel</span> booking
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                  doctus volumus explicari qui ex.
                </p>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </main>
        {/* End main */}
      </div>
    </div>
  );
};

export default Page_404;
