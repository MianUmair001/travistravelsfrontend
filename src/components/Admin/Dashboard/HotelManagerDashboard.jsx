import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import {
  deleteHotel,
  findByUserId,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../../redux/actions/hotels.action";
import HotelGrid from "../../Hotel/All_Hotels/HotelGrid";
import { findBookedServiceByAuth } from "../../../redux/actions/userDashboard.action";
import axios from "axios";

const HotelManagerDashboard = () => {
  const [hotels, setHotels] = useState([]);
  const statehotels = useSelector((state) => state.hotels);
  const role = useSelector((state) => state.auth.role);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState([]);
  const [showHotels, setShowHotels] = useState();
  const [showBookings, setshowBookings] = useState();

  useEffect(async () => {
    const data = await dispatch(findBookedServiceByAuth(role, user));
    console.log(data);
    setBookings(data);
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

  useEffect(async () => {
    const { data } = await dispatch(findByUserId(user));
    console.log("I am hotels Data Sai wala ", data);
    setHotels(data);
  }, []);

  const handleDeleteHotel = async (e, props) => {
    e.preventDefault();
    let id = props;
    await dispatch(deleteHotel(id));
    await dispatch(getAllHotels());
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
  const handleCreateHotel = (e) => {
    e.preventDefault();
    history.push("/create_hotel");
  };
  const handleDetailHotel = async (e, props) => {
    e.preventDefault();
    let id = props;
    await dispatch(getHotelByID(id));
    history.push(`/single_hotel/${props}`);
  };
  return (
    <div>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/admin_top.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Hello {userEmail?.split("@")[0]}!</h1>
            <p>Welcome to Your Dashboard Here Your can manage Hotels</p>
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
                      setShowHotels(false);
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
                      setShowHotels(true);
                    }}
                    className="icon-profile"
                  >
                    <span>Hotels</span>
                  </Button>
                </li>
              </ul>
            </nav>
            <div>
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
                {showHotels && (
                  <>
                    <h1 style={{ textAlign: "center" }}> Hotels</h1>
                    {hotels?.length === 0 ? (
                      <>
                        <h1>You have not created any Hotels</h1>
                        <Button
                          type="submit"
                          className="btn_1 green"
                          onClick={(e) => handleCreateHotel(e)}
                        >
                          Create Hotel
                        </Button>
                      </>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelManagerDashboard;
