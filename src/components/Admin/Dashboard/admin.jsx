import React from "react";
import { Button } from "@material-ui/core";

const AdminDashBoard = ({ history }) => {

  const handleBookings   = (e) => {
    e.preventDefault()

  }
  const handleHotels  = (e) => {
    e.preventDefault()

    history.push('/all_hotels_list')
  }
  const handleRestaurant  = (e) => {
    e.preventDefault()

    history.push('/all_restaurants_list')
  }
  const handleTour  = (e) => {
    e.preventDefault()

    history.push('/all_tours_list')
  }
  const handleTransfers  = (e) => {
    e.preventDefault()

    history.push('/all_transfer_list')
  }
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
                  <Button onClick={handleBookings} className="icon-booking">
                    <span>Bookings</span>
                  </Button>
                </li>
                <li>
                  <Button onClick={handleTour} className="icon-wishlist">
                    <span>Tour</span>
                  </Button>
                </li>
                <li>
                  <Button onClick={handleHotels} className="icon-settings">
                    <span>Hotels</span>
                  </Button>
                </li>
                <li>
                  <Button onClick={handleTransfers} className="icon-profile">
                    <span>Transfers</span>
                  </Button>
                </li>
                <li>
                  <Button onClick={handleRestaurant} className="icon-profile">
                    <span>Restaurant</span>
                  </Button>
                </li>
              </ul>
            </nav>

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

export default AdminDashBoard;
