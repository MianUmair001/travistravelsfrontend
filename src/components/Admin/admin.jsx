import { Delete, DeleteOutlined, Edit, Info } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteTour, getTours } from "../../redux/actions/tour.action";
import Profile from "./profile";
import { Button } from "@material-ui/core";

import "./Styles/admin.css";
import {
  deleteHotel,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../redux/actions/hotels.action";
import {
  deleteTransportByID,
  getALlTransport,
  getTransportByid,
  updateTransport,
} from "../../redux/actions/transport.action";
const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);
  useEffect(async () => {
    const { data } = await dispatch(getTours());
    console.log(data);
    setTours(data);
  }, [tours]);
  const handleDetailTour = async (e, id) => {
    e.preventDefault();
    history.push(`/single_tour/${id}`);
  };
  const handleDeleteTour = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteTour(id));
  };
  const handleUpdateTour = async (e, id) => {
    e.preventDefault();
    history.push(`/update_tour/${id}`);
  };
  const handleCreateTour = async (e) => {
    e.preventDefault();
    history.push(`/create_tour`);
  };
  const handleCreateHotel = async (e) => {
    e.preventDefault();
    history.push(`/create_hotel`);
  };

  const handleCreateTransport = async (e) => {
    e.preventDefault();
    history.push(`/create_transport`);
  };

  const [hotelsListShow, setHotelsListShow] = useState([]);
  const AllHotels = hotelsListShow[0];

  useEffect(async () => {
    const hotelListArray = await dispatch(getAllHotels());
    setHotelsListShow(hotelListArray);
    return hotelListArray;
  }, [AllHotels]);

  const handleDeleteHotel = async (e, props) => {
    e.preventDefault();
    let id = props;

    dispatch(deleteHotel(id));
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

  const handleDetailHotel = async (e, props) => {
    e.preventDefault();
    let id = props;

    await dispatch(getHotelByID(id));
    history.push(`/single_hotel/${props}`);
  };

  const handleAddHotel = (e) => {
    e.preventDefault();

    history.push("/create_hotel");
  };

  const [transportsListShow, setTransportsListShow] = useState([]);

  useEffect(async () => {
    const transportListArray = await dispatch(getALlTransport());
    setTransportsListShow(transportListArray);
    return transportListArray;
  }, [transportsListShow]);

  const handleDeleteTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(deleteTransportByID(props._id));
  };

  const handleDetailTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(getTransportByid(props._id));
    history.push(`/single_transfer/${props._id}`);
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

  const handleAddTransport = (e) => {
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
                  <a href="#section-1" className="icon-booking">
                    <span>Bookings</span>
                  </a>
                </li>
                <li>
                  <a href="#section-2" className="icon-wishlist">
                    <span>Tour</span>
                  </a>
                </li>
                <li>
                  <a href="#section-3" className="icon-settings">
                    <span>Hotels</span>
                  </a>
                </li>
                <li>
                  <a href="#section-4" className="icon-profile">
                    <span>Transfers</span>
                  </a>
                </li>
                <li>
                  <a href="#section-5" className="icon-profile">
                    <span>Restaurant</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="content">
              <section id="section-1">
                <div id="tools">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_type" id="sort_type">
                          <option value selected>
                            Sort by type
                          </option>
                          <option value="tours">Tours</option>
                          <option value="hotels">Hotels</option>
                          <option value="transfers">Transfers</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_date" id="sort_date">
                          <option value selected>
                            Sort by date
                          </option>
                          <option value="oldest">Oldest</option>
                          <option value="recent">Recent</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/tools */}

                {[1, 2, 3, 4].map((number) => (
                  <div className="strip_booking">
                    <div className="row">
                      <div className="col-lg-2 col-md-2">
                        <div className="date">
                          <span className="month">Dec</span>
                          <span className="day">
                            <strong>23</strong>Sat
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <h3 className="hotel_booking">
                          Hotel Mariott Paris<span>2 Adults / 2 Nights</span>
                        </h3>
                      </div>
                      <div className="col-lg-2 col-md-3">
                        <ul className="info_booking">
                          <li>
                            <strong>Booking id</strong> 23442
                          </li>
                          <li>
                            <strong>Booked on</strong> Sat. 23 Dec. 2015
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-2 col-md-2">
                        <div className="booking_buttons">
                          <a href="#0" className="btn_2">
                            Edit
                          </a>
                          <a href="#0" className="btn_3">
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                  </div>
                ))}
              </section>
              {/* End section 1 */}
              <section id="section-2">
                <div class="row">
                  {tours.map((tour) => (
                    <div
                      class="col-lg-4 col-md-6 wow zoomIn"
                      data-wow-delay="0.3s"
                      key={tour._id}
                    >
                      <div class="tour_container">
                        <div class="ribbon_3 popular">
                          <span>Popular</span>
                        </div>
                        <div class="img_container">
                          <a href="single_tour.html">
                            <img
                              src="img/tour_box_3.jpg"
                              width="800"
                              height="533"
                              class="img-fluid"
                              alt="Image"
                            />
                            <div class="short_info">
                              <i class="icon_set_1_icon-44"></i>Historic
                              Buildings
                              <span class="price">
                                <sup>$</sup>
                                {tour.price}
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="tour_title">
                          <h3>
                            <strong>{tour.name}</strong> tour
                          </h3>
                          <div class="rating">
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile"></i>
                            <small>(75)</small>
                          </div>
                          {/* end rating */}
                          <div class="wishlist">
                            <a class="tooltip_flip tooltip-effect-1" href="#">
                              +
                              <span class="tooltip-content-flip">
                                <span class="tooltip-back">
                                  Add to wishlist
                                </span>
                              </span>
                            </a>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className="btn"
                          >
                            <Button
                              variant="contained"
                              size="small"
                              startIcon={<Edit />}
                              style={{
                                backgroundColor: "green",
                                color: "white",
                              }}
                              onClick={(e) => handleUpdateTour(e, tour._id)}
                            >
                              Update
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              startIcon={<Delete />}
                              style={{
                                color: "red",
                              }}
                              onClick={(e) => handleDeleteTour(e, tour._id)}
                            >
                              Delete
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              startIcon={<Info />}
                              style={{
                                backgroundColor: "green",
                                color: "white",
                              }}
                              onClick={(e) => handleDetailTour(e, tour._id)}
                            >
                              Details
                            </Button>
                          </div>

                          {/* End wish list */}
                        </div>
                      </div>
                      {/* End box tour */}
                    </div>
                  ))}
                </div>
                {/* End row */}
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={(e) => handleCreateTour(e)}
                >
                  Create Tour
                </button>
              </section>

              {/* End section 2 */}

              <section id="section-3">
                <div class="row">
                  {AllHotels?.map((grid) => (
                    <div
                      className="col-lg-4 col-md-6 wow zoomIn"
                      data-wow-delay="0.1s"
                      key={grid._id}
                    >
                      <div className="hotel_container">
                        <div className="ribbon_3 popular">
                          <span>Popular</span>
                        </div>
                        <div className="img_container">
                          <a href="single_hotel.html">
                            <img
                              src="img/hotel_1.jpg"
                              width={800}
                              height={533}
                              className="img-fluid"
                              alt="Image"
                            />
                            <div className="score">
                              <span>7.5</span>Good
                            </div>
                            <div className="short_info hotel">
                              From/Per night
                              <span className="price">
                                <sup>$</sup>
                                {grid.price}
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="hotel_title">
                          <h3>
                            <strong>{grid.name}</strong> Hotel
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
                            <a
                              className="tooltip_flip tooltip-effect-1"
                              href="#"
                            >
                              +
                              <span className="tooltip-content-flip">
                                <span className="tooltip-back">
                                  Add to wishlist
                                </span>
                              </span>
                            </a>
                          </div>

                          {/* End wish list*/}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                          className="btn"
                        >
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<Edit />}
                            style={{
                              backgroundColor: "green",
                              color: "white",
                            }}
                            onClick={(e) => handleUpdateHotel(e, grid)}
                          >
                            Update
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<DeleteOutlined />}
                            style={{
                              color: "red",
                            }}
                            onClick={(e) => handleDeleteHotel(e, grid._id)}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<Info />}
                            style={{
                              backgroundColor: "green",
                              color: "white",
                            }}
                            onClick={(e) => handleDetailHotel(e, grid._id)}
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                      {/* End box tour */}
                    </div>
                  ))}
                </div>
                {/* End row */}
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={(e) => handleCreateHotel(e)}
                >
                  Create Hotel
                </button>
              </section>

              <section id="section-4">
                <div class="row">
                  {transportsListShow?.length === 0 ? (
                    <h3 style={{ display: "flex", justifyContent: "center" }}>
                      No Hotels To Show
                    </h3>
                  ) : (
                    <div>
                      <div className="row">
                        {transportsListShow?.map((transportGrid) => (
                          <div
                            className="col-md-6 wow zoomIn"
                            data-wow-delay="0.1s"
                            key={transportGrid._id}
                          >
                            <div className="hotel_container">
                              <div className="ribbon_3 popular">
                                <span>Popular</span>
                              </div>
                              <div className="img_container">
                                <a href="single_hotel.html">
                                  <img
                                    src="img/hotel_1.jpg"
                                    width={800}
                                    height={533}
                                    className="img-fluid"
                                    alt="Image"
                                  />
                                  <div className="score">
                                    <span>7.5</span>Good
                                  </div>
                                  <div className="short_info hotel">
                                    price Per killometer
                                    <span className="price">
                                      <sup>$</sup>
                                      {transportGrid.pricePerKillomter}
                                    </span>
                                  </div>
                                </a>
                              </div>
                              <div className="hotel_title">
                                <h3>
                                  <strong>{transportGrid.name}</strong>
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
                                  <a
                                    className="tooltip_flip tooltip-effect-1"
                                    href="#"
                                  >
                                    +
                                    <span className="tooltip-content-flip">
                                      <span className="tooltip-back">
                                        Add to wishlist
                                      </span>
                                    </span>
                                  </a>
                                </div>

                                {/* End wish list*/}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                                className="btn"
                              >
                                <Button
                                  variant="contained"
                                  size="small"
                                  startIcon={<Edit />}
                                  style={{
                                    backgroundColor: "green",
                                    color: "white",
                                  }}
                                  onClick={(e) =>
                                    handleUpdateTransport(e, transportGrid)
                                  }
                                >
                                  Update
                                </Button>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  startIcon={<DeleteOutlined />}
                                  style={{
                                    color: "red",
                                  }}
                                  onClick={(e) =>
                                    handleDeleteTransport(e, transportGrid)
                                  }
                                >
                                  Delete
                                </Button>
                                <Button
                                  variant="outlined"
                                  size="small"
                                  startIcon={<Info />}
                                  style={{
                                    backgroundColor: "green",
                                    color: "white",
                                  }}
                                  onClick={(e) =>
                                    handleDetailTransport(e, transportGrid)
                                  }
                                >
                                  Details
                                </Button>
                              </div>
                            </div>
                            {/* End box tour */}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* End row */}
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={(e) => handleCreateTransport(e)}
                >
                  Create Transport
                </button>
              </section>

              <section id="section-5">
                <div className="row">
                  <div className="col-md-6 add_bottom_30">
                    <h4>Change your password</h4>
                    <div className="form-group">
                      <label>Old password</label>
                      <input
                        className="form-control"
                        name="old_password"
                        id="old_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>New password</label>
                      <input
                        className="form-control"
                        name="new_password"
                        id="new_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm new password</label>
                      <input
                        className="form-control"
                        name="confirm_new_password"
                        id="confirm_new_password"
                        type="password"
                      />
                    </div>
                    <button type="submit" className="btn_1 green">
                      Update Password
                    </button>
                  </div>
                  <div className="col-md-6 add_bottom_30">
                    <h4>Change your email</h4>
                    <div className="form-group">
                      <label>Old email</label>
                      <input
                        className="form-control"
                        name="old_password"
                        id="old_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>New email</label>
                      <input
                        className="form-control"
                        name="new_password"
                        id="new_password"
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm new email</label>
                      <input
                        className="form-control"
                        name="confirm_new_password"
                        id="confirm_new_password"
                        type="password"
                      />
                    </div>
                    <button type="submit" className="btn_1 green">
                      Update Email
                    </button>
                  </div>
                </div>
                {/* End row */}
                <hr />
                <br />
                <div className="row">
                  <div className="col-lg-6">
                    <h4>Notification settings</h4>
                    <table className="table table-striped options_cart">
                      <tbody>
                        <tr>
                          <td style={{ width: "10%" }}>
                            <i className="icon_set_1_icon-33" />
                          </td>
                          <td style={{ width: "60%" }}>
                            New TravisTravels Tours
                          </td>
                          <td style={{ width: "35%" }}>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_1"
                                id="option_1"
                                defaultChecked
                                defaultValue
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="icon_set_1_icon-6" />
                          </td>
                          <td>New TravisTravels Hotels</td>
                          <td>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_2"
                                id="option_2"
                                defaultValue
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="icon_set_1_icon-26" />
                          </td>
                          <td>New TravisTravels Transfers</td>
                          <td>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_3"
                                id="option_3"
                                defaultValue
                                defaultChecked
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="icon_set_1_icon-81" />
                          </td>
                          <td>New TravisTravels special offers</td>
                          <td>
                            <label className="switch-light switch-ios pull-right">
                              <input
                                type="checkbox"
                                name="option_4"
                                id="option_4"
                                defaultValue
                              />
                              <span>
                                <span>No</span>
                                <span>Yes</span>
                              </span>
                              <a />
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="submit" className="btn_1 green">
                      Update notifications settings
                    </button>
                  </div>
                </div>
                {/* End row */}
              </section>
              {/* End section 3 */}
              <Profile />
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
