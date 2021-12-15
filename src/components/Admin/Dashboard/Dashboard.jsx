import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookings,
  getUserData,
} from "../../../redux/actions/userDashboard.action";
import { useHistory } from "react-router-dom";
import {
  findAllTransportsWithUserId,
  getTransportByid,
} from "../../../redux/actions/transport.action";
import axios from "axios";
import TransferGrid from "../Transport/All_Transfer/TransferGrid";
import RestaurantGrid from "../../Restaurants/All Restaurants/RestaurantGrid";
import { findAllRestaurantWithUserId } from "../../../redux/actions/restaurant.action";
const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showBookings, setshowBookings] = useState(false);
  const [showTransports, setshowTransports] = useState(false);
  const [showRestaurants, setshowRestaurants] = useState(false);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const role = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.user);
  const [transportsListShow, setTransportsListShow] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [bookings, setBookings] = useState([]);

  console.log("transportsListShow", transportsListShow);

  useEffect(async () => {
    const data = await dispatch(getBookings(userId));
    setBookings(data);
  }, []);
  const handleCreateRestuarant = (e) => {
    e.preventDefault();

    history.push("/create_restaurant");
  };

  useEffect(async () => {
    const data = await dispatch(findAllTransportsWithUserId(userId));
    console.log("data", data);
    setTransportsListShow(data);
  }, []);
  useEffect(async () => {
    const { data } = await dispatch(findAllRestaurantWithUserId(userId));
    setRestaurants(data);
  }, []);

  const deleteBooking = async (e, id) => {
    e.preventDefault();
    try {
      const {
        data: { data },
      } = await axios.delete(`http://localhost:3000/api/booking/${id}`);
      history.push("/user_dashboard");
    } catch (error) {
      console.log({ error });
    }
  };
  const handleDetailRestaurant = async (e, id) => {
    e.preventDefault();
    history.push(`/single_restaurant/${id}`);
  };

  const handleDetailTransport = async (e, props) => {
    e.preventDefault();
    await dispatch(getTransportByid(props._id));
    history.push(`/single_transfer/${props._id}`);
  };

  const handleCreateTransport = (e) => {
    e.preventDefault();
    history.push("/create_transport");
  };

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
            <h3>
              <small>{role?.split("M").join(" M")} Dashboard</small>
            </h3>
            <p>
              Hello {userEmail?.split("@")[0]}! <br></br>Welcome to your
              dashboard. Here you can manage your bookings etc
            </p>
          </div>
        </div>
      </section>

      <main>
        <div className="margin_60 container">
          <div id="tabs" className="tabs">
            <nav>
              <ul>
                <li>
                  <Button
                    onClick={() => {
                      setshowBookings(true);
                      setshowTransports(false);
                      setshowRestaurants(false);
                    }}
                    className="icon-booking"
                  >
                    <span>Bookings</span>
                  </Button>
                </li>

                {role === "transportManager" && (
                  <li>
                    <Button
                      onClick={() => {
                        setshowBookings(false);
                        setshowTransports(true);
                        setshowRestaurants(false);
                      }}
                      className="icon-profile"
                    >
                      <span>Transfers</span>
                    </Button>
                  </li>
                )}
                {role === "restaurantManager" && (
                  <li>
                    <Button
                      onClick={() => {
                        setshowBookings(false);
                        setshowTransports(false);
                        setshowRestaurants(true);
                      }}
                      className="icon-profile"
                    >
                      <span>Restaurant</span>
                    </Button>
                  </li>
                )}
              </ul>
            </nav>
            <div className="">
              <section id="">
                {showBookings && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Bookings</h1>
                    {bookings?.length === 0 ? (
                      <h1>You does not have any bookings yet</h1>
                    ) : (
                      bookings?.map((booking) => (
                        <div className="strip_booking" key={booking._id}>
                          <div className="row">
                            <div className="col-lg-2 col-md-2">
                              <div className="date">
                                <span className="month">
                                  {console.log(
                                    booking.bookingDate
                                      .split("T")[0]
                                      .split("-")[1]
                                  )}
                                  Month:
                                  {
                                    booking.bookingDate
                                      .split("T")[0]
                                      .split("-")[1]
                                  }
                                </span>
                                <span className="day">
                                  <strong>
                                    {
                                      booking.bookingDate
                                        .split("T")[0]
                                        .split("-")[2]
                                    }
                                  </strong>
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                              <h3 className="hotel_booking">
                                {booking.title}
                                <span>
                                  {booking.noOfAdults} Adults /{" "}
                                  {booking.noOfChildren} Children
                                </span>
                              </h3>
                            </div>
                            <div className="col-lg-2 col-md-3">
                              <ul className="info_booking">
                                <li>
                                  <strong>Booking id</strong> {booking._id}
                                </li>
                                <li>
                                  <strong>Booked on</strong>
                                  {booking.createdAt.split("T")[0]}
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-2 col-md-2">
                              <div className="booking_buttons">
                                <a
                                  onClick={(e) => deleteBooking(e, booking._id)}
                                  className="btn_3"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* End row */}
                        </div>
                      ))
                    )}
                  </>
                )}
              </section>

              <section id="">
                {showTransports && (
                  <>
                    <h1 style={{ textAlign: "center" }}> Transports</h1>

                    {transportsListShow?.length === 0 ? (
                      <>
                        <h1>You have Not Created any Transport</h1>
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateTransport(e)}
                        >
                          Create Transport
                        </Button>
                      </>
                    ) : (
                      <>
                        <TransferGrid
                          transportsListShow={transportsListShow}
                          handleDetailTransport={handleDetailTransport}
                          role={role}
                        />
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateTransport(e)}
                        >
                          Create Transport
                        </Button>
                      </>
                    )}
                  </>
                )}
              </section>
              <section id="">
                {showRestaurants && (
                  <>
                    <h1 style={{ textAlign: "center" }}> Restaurants</h1>
                    {restaurants?.length === 0 ? (
                      <>
                        <h1>You have Not Created any Restaurant</h1>
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateRestuarant(e)}
                          style={{
                            marginLeft: "15px",
                            backgroundColor: "green",
                            color: "white",
                          }}
                        >
                          Create Restuarant
                        </Button>
                      </>
                    ) : (
                      <>
                        <RestaurantGrid
                          restaurants={restaurants}
                          handleDetailRestaurant={handleDetailRestaurant}
                          role={role}
                        />
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateRestuarant(e)}
                          style={{
                            marginLeft: "15px",
                            backgroundColor: "green",
                            color: "white",
                          }}
                        >
                          Create Restuarant
                        </Button>
                      </>
                    )}
                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
