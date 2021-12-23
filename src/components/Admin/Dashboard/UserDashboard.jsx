import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  getBookings,
} from "../../../redux/actions/userDashboard.action";
import TourGrid from "../../Tours/All Tours/TourGrid";
import { deleteTour, getTours } from "../../../redux/actions/tour.action";
import { useHistory } from "react-router-dom";
import HotelGrid from "../../Hotel/All_Hotels/HotelGrid";
import TransferGrid from "../Transport/All_Transfer/TransferGrid";
import RestaurantGrid from "../../Restaurants/All Restaurants/RestaurantGrid";
import axios from "axios";
import { toast } from "react-toastify";
import { getHotelByID } from "../../../redux/actions/hotels.action";
import { getTransportByid } from "../../../redux/actions/transport.action";

const UserDashboard = () => {
  const [showBookings, setshowBookings] = useState(false);
  const [showHotels, setshowHotels] = useState(false);
  const [showTours, setshowTours] = useState(false);
  const [showTransports, setshowTransports] = useState(false);
  const [showRestaurants, setshowRestaurants] = useState(false);
  const [tours, setTours] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const role = useSelector((state) => state.auth.role);
  const [transportsListShow, setTransportsListShow] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(async () => {
    const data = await dispatch(getBookings(user));
    console.log("I am Booking Data", data);
    setBookings(data);
  }, []);

  useEffect(async () => {
    console.log("User ID", user);
    const data = await dispatch(getUserData(user, "Tour"));
    console.log("I am Tours Data", data);
    setTours(data);
  }, []);
  useEffect(async () => {
    const data = await dispatch(getUserData(user, "Hotel"));
    console.log("I am Hotels Data", data);
    setHotels(data);
  }, []);
  useEffect(async () => {
    const data = await dispatch(getUserData(user, "Transport"));
    console.log("I am Transports Data", data);
    setTransportsListShow(data);
  }, []);
  useEffect(async () => {
    const data = await dispatch(getUserData(user, "Restaurant"));
    console.log("I am Restaurants Data", data);
    setRestaurants(data);
  }, []);

  const deleteBooking = async (e, id) => {
    e.preventDefault();
    try {
      const {
        data: { data },
      } = await axios.delete(`http://localhost:3000/api/booking/${id}`);
      console.log("I am BookingDelte data", data);
      toast.success("Booking Deleted Successfully");
      history.push("/user_dashboard");
    } catch (error) {
      console.log({ error });
      toast.error(error.response.data.message);
    }
  };
  const handleDetailRestaurant = async (e, id) => {
    e.preventDefault();
    history.push(`/single_restaurant/${id}`);
  };
  const handleDetailTour = async (e, id) => {
    e.preventDefault();
    history.push(`/single_tour/${id}`);
  };
  const handleDetailHotel = async (e, props) => {
    e.preventDefault();
    let id = props;
    await dispatch(getHotelByID(id));
    history.push(`/single_hotel/${props}`);
  };
  const handleDetailTransport = async (e, props) => {
    e.preventDefault();
    await dispatch(getTransportByid(props._id));
    history.push(`/single_transfer/${props._id}`);
  };

  const handleCreateTour = (e) => {
    e.preventDefault();
    history.push("/create_tour");
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
            <h1>Hello {userEmail.split("@")[0]}</h1>
            <p>
              Welcome to your dashboard. Here you can manage your bookings etc
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
                      setshowTours(false);
                      setshowHotels(false);
                      setshowTransports(false);
                      setshowRestaurants(false);
                    }}
                    className="icon-booking"
                  >
                    <span>Bookings</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      setshowBookings(false);
                      setshowTours(true);
                      setshowHotels(false);
                      setshowTransports(false);
                      setshowRestaurants(false);
                    }}
                    className="icon-wishlist"
                  >
                    <span>Tour</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      setshowBookings(false);
                      setshowTours(false);
                      setshowHotels(true);
                      setshowTransports(false);
                      setshowRestaurants(false);
                    }}
                    className="icon-settings"
                  >
                    <span>Hotels</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      setshowBookings(false);
                      setshowTours(false);
                      setshowHotels(false);
                      setshowTransports(true);
                      setshowRestaurants(false);
                    }}
                    className="icon-profile"
                  >
                    <span>Transports</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      setshowBookings(false);
                      setshowTours(false);
                      setshowHotels(false);
                      setshowTransports(false);
                      setshowRestaurants(true);
                    }}
                    className="icon-profile"
                  >
                    <span>Restaurant</span>
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="">
              <section id="">
                {showBookings && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Bookings</h1>
                    {bookings?.length === 0 ? (
                      <h1>You have Not booked any thing</h1>
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
                {showTours && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Booked Tours</h1>
                    {tours?.length === 0 ? (
                      <h1>You have Not booked any Tour</h1>
                    ) : (
                      <TourGrid
                        tours={tours}
                        handleDetailTour={handleDetailTour}
                        role={role}
                      />
                    )}
                    <Button
                      type="submit"
                      className="btn_1 green"
                      onClick={(e) => handleCreateTour(e)}
                    >
                      Create Tour
                    </Button>
                  </>
                )}
              </section>

              <section id="">
                {showHotels && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Booked Hotels</h1>
                    {hotels?.length === 0 ? (
                      <h1>You have Not booked any Hotel</h1>
                    ) : (
                      <HotelGrid
                        hotels={hotels}
                        handleDetailHotel={handleDetailHotel}
                        role={role}
                      />
                    )}
                  </>
                )}
              </section>
              <section id="">
                {showTransports && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Booked Transports</h1>

                    {transportsListShow?.length === 0 ? (
                      <h1>You have Not booked any Transport</h1>
                    ) : (
                      <TransferGrid
                        transportsListShow={transportsListShow}
                        handleDetailTransport={handleDetailTransport}
                        role={role}
                      />
                    )}
                  </>
                )}
              </section>
              <section id="">
                {showRestaurants && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Booked Restaurants</h1>
                    {restaurants?.length === 0 ? (
                      <h1>You have Not booked any Restaurant</h1>
                    ) : (
                      <RestaurantGrid
                        restaurants={restaurants}
                        handleDetailRestaurant={handleDetailRestaurant}
                        role={role}
                      />
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

export default UserDashboard;
