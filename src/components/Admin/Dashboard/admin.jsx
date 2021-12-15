import { Delete, DeleteOutlined, Edit, Info } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { deleteTour, getTours } from "../../../redux/actions/tour.action";
import axios from "axios";

import {
  deleteHotel,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../../redux/actions/hotels.action";
import {
  deleteTransportByID,
  getALlTransport,
  getTransportByid,
  updateTransport,
} from "../../../redux/actions/transport.action";
import Profile from "../Profile/profile";
import {
  deleteRestaurant,
  getAllRestaurants,
} from "../../../redux/actions/restaurant.action";
import TourGrid from "../../Tours/All Tours/TourGrid";
import RestaurantGrid from "../../Restaurants/All Restaurants/RestaurantGrid";
import { getAllBookings } from "../../../redux/actions/userDashboard.action";
import { toast } from "react-toastify";
import HotelGrid from "../../Hotel/All_Hotels/HotelGrid";
import TransferGrid from "../Transport/All_Transfer/TransferGrid";

// import "./Styles/admin.css";

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);
  const [hotels, setHotels] = useState([]);
  const statetours = useSelector((state) => state.tours);
  const statehotels = useSelector((state) => state.hotels);
  const [showBookings, setshowBookings] = useState(false);
  const [showHotels, setshowHotels] = useState(false);
  const [showTours, setshowTours] = useState(false);
  const [showTransports, setshowTransports] = useState(false);
  const [showRestaurants, setshowRestaurants] = useState(false);
  const [showProfile, setshowProfile] = useState(false);
  console.log(statetours.tours, "ia ma");
  const [transportsListShow, setTransportsListShow] = useState([]);
  const role = useSelector((state) => state.auth.role);
  const [restaurants, setRestaurants] = useState([]);
  const staterestaurants = useSelector((state) => state.restaurants);
  const [bookings, setBookings] = useState([]);

  useEffect(async () => {
    const data = await dispatch(getAllBookings());
    console.log("bookings", data);
    setBookings(data);
  }, []);

  console.log(staterestaurants, "ia ma");

  const handleDetailRestaurant = async (e, id) => {
    e.preventDefault();
    history.push(`/single_restaurant/${id}`);
  };
  const handleDeleteRestaurant = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteRestaurant(id));
    await dispatch(getAllRestaurants());
  };
  const handleUpdateRestaurant = async (e, id) => {
    e.preventDefault();
    history.push(`/update_restaurant/${id}`);
    await dispatch(getAllRestaurants());
  };
  useEffect(async () => {
    if (staterestaurants.restaurants.length === 0) {
      const { data } = await dispatch(getAllRestaurants());
      console.log("I am data in File", data);
      setRestaurants(data);
    } else {
      setRestaurants(staterestaurants.restaurants);
    }
  }, [staterestaurants.restaurants, restaurants]);

  useEffect(async () => {
    if (statetours.tours.length === 0) {
      const { data } = await dispatch(getTours());
      console.log(data);
      setTours(data);
      console.log("I am in store value check if");
    } else {
      setTours(statetours.tours);
    }
  }, [statetours.tours, tours]);

  useEffect(async () => {
    if (statehotels.hotels.length === 0) {
      const { data } = await dispatch(getAllHotels());
      const hotelList = data;
      console.log("I am hotels Data Sai wala ", data);
      setHotels(hotelList);
    } else {
      setHotels(statehotels.hotels);
    }
  }, [statehotels.hotels, hotels]);

  const statetransports = useSelector((state) => state.transports);
  console.log(statetransports.transports, "ia ma");
  useEffect(async () => {
    if (statetransports.transports.length === 0) {
      const { data } = await dispatch(getALlTransport());
      console.log(data);
      setTransportsListShow(data);
      console.log("I am in store value check if");
    } else {
      setTransportsListShow(statetransports.transports);
    }
  }, [statetransports.transports, transportsListShow]);

  const handleCreateTour = (e) => {
    e.preventDefault();
    history.push("/create_tour");
  };
  const handleDetailTour = async (e, id) => {
    e.preventDefault();
    history.push(`/single_tour/${id}`);
  };
  const handleDeleteHotel = async (e, props) => {
    e.preventDefault();
    let id = props;
    await dispatch(deleteHotel(id));
    await dispatch(getAllHotels());
  };
  const handleDetailHotel = async (e, props) => {
    e.preventDefault();
    let id = props;
    await dispatch(getHotelByID(id));
    history.push(`/single_hotel/${props}`);
  };
  const handleCreateHotel = (e) => {
    e.preventDefault();
    history.push("/create_hotel");
  };
  const handleDeleteTransport = async (e, props) => {
    e.preventDefault();
    await dispatch(deleteTransportByID(props._id));
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

  const handleUpdateTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(
      updateTransport(
        props._id,
        props.name,
        props.modelName,
        props.description,
        props.transportType,
        props.numberOfSeats,
        props.pricePerKillomter,
        props.AC,
        props.Availability,
        props.images
      )
    );
    history.push(`/update_transport/${props._id}`);
  };

  const handleUpdateHotel = async (e, props) => {
    e.preventDefault();

    let id = props._id;
    let name = props.name;
    let description = props.description;
    let images = props.images;

    await dispatch(updateHotel(id, name, description, images));
    history.push(`/update_hotel/${props._id}`);
  };
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

  const handleDeleteTour = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteTour(id));
    await dispatch(getTours());
  };
  const handleUpdateTour = async (e, id) => {
    e.preventDefault();
    history.push(`/update_tour/${id}`);
    await dispatch(getTours());
  };

  const handleCreateRestuarant = (e) => {
    e.preventDefault();

    history.push("/create_restaurant");
  };
  const userEmail = useSelector((state) => state.auth.userEmail);
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
            <h1>Hello {userEmail.split("@")[0]}!</h1>
            <p>
              Welcome to Your Dashboard Here Your can manage
              Hotels,Bookings,Restaurants,Tours
            </p>
          </div>
        </div>
      </section>
      {/* End section */}
      {/* End section */}
      <main>
        {/* End Position */}
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
                      <h1>There are not any bookings yet </h1>
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

              {/* End section 1 */}
              <section id="">
                {showTours && (
                  <>
                    <h1 style={{ textAlign: "center" }}>Tours</h1>
                    {tours?.length === 0 ? (
                      <h1>There are not any tours yet </h1>
                    ) : (
                      <>
                        <TourGrid
                          tours={tours}
                          handleDeleteTour={handleDeleteTour}
                          handleUpdateTour={handleUpdateTour}
                          handleDetailTour={handleDetailTour}
                          role={role}
                        />
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateTour(e)}
                        >
                          Create Tour
                        </Button>
                      </>
                    )}
                  </>
                )}
              </section>

              {/* End section 2 */}
              <section id="">
                {showHotels && (
                  <>
                    <h1 style={{ textAlign: "center" }}> Hotels</h1>
                    {hotels?.length === 0 ? (
                      <h1>There are not any Hotels In Database</h1>
                    ) : (
                      <>
                        <HotelGrid
                          hotels={hotels}
                          handleDetailHotel={handleDetailHotel}
                          handleDeleteHotel={handleDeleteHotel}
                          handleUpdateHotel={handleUpdateHotel}
                          role={role}
                        />
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateHotel(e)}
                        >
                          Create Hotel
                        </Button>
                      </>
                    )}
                  </>
                )}
              </section>

              <section id="">
                {showTransports && (
                  <>
                    <h1 style={{ textAlign: "center" }}> Transports</h1>

                    {transportsListShow?.length === 0 ? (
                      <h1>There are not any Transports in Database</h1>
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

              <section id="section-5">
                {showRestaurants && (
                  <>
                    <h1 style={{ textAlign: "center" }}> Restaurants</h1>
                    {restaurants?.length === 0 ? (
                      <h1>There are not any Restaurants in Database</h1>
                    ) : (
                      <>
                        <RestaurantGrid
                          restaurants={restaurants}
                          handleDeleteRestaurant={handleDeleteRestaurant}
                          handleUpdateRestaurant={handleUpdateRestaurant}
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

              {/* End section 3 */}
              {/* <Profile /> */}
            </div>
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
