import { Delete, DeleteOutlined, Edit, Info } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { deleteTour, getTours } from "../../../redux/actions/tour.action";
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

// import "./Styles/admin.css";

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);
  const [AllHotels, setAllHotels] = useState([]);
  const statetours = useSelector((state) => state.tours);
  const statehotels = useSelector((state) => state.hotels);
  const [showBookings, setshowBookings] = useState(false);
  const [showHotels, setshowHotels] = useState(false);
  const [showTours, setshowTours] = useState(false);
  const [showTransports, setshowTransports] = useState(false);
  const [showRestaurants, setshowRestaurants] = useState(false);
  const [showProfile, setshowProfile] = useState(false);
  console.log(statetours.tours, "ia ma");
  const [hotelsListShow, setHotelsListShow] = useState([]);
  const [transportsListShow, setTransportsListShow] = useState([]);

  const [restaurants, setRestaurants] = useState([]);
  const staterestaurants = useSelector((state) => state.restaurants);
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
      const data = await dispatch(getAllHotels());
      const hotelList = data.data;
      setAllHotels(hotelList);
    } else {
      setAllHotels(statehotels.hotels);
    }
  }, [statehotels.hotels, AllHotels]);

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
                  <Button
                    onClick={() => setshowBookings(!showBookings)}
                    className="icon-booking"
                  >
                    <span>Bookings</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => setshowTours(!showTours)}
                    className="icon-wishlist"
                  >
                    <span>Tour</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => setshowHotels(!showHotels)}
                    className="icon-settings"
                  >
                    <span>Hotels</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => setshowTransports(!showTransports)}
                    className="icon-profile"
                  >
                    <span>Transfers</span>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => setshowRestaurants(true)}
                    className="icon-profile"
                  >
                    <span>Restaurant</span>
                  </Button>
                </li>
              </ul>
            </nav>

            <div className="content">
              <section id="section-1">
                Bookings
                {showBookings && (
                  <>
                    <div id="tools">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-6">
                          <div className="styled-select-filters">
                            <select name="sort_type" id="sort_type">
                              <option value>Sort by type</option>
                              <option value="tours">Tours</option>
                              <option value="hotels">Hotels</option>
                              <option value="transfers">Transfers</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                          <div className="styled-select-filters">
                            <select name="sort_date" id="sort_date">
                              <option value>Sort by date</option>
                              <option value="oldest">Oldest</option>
                              <option value="recent">Recent</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {[1, 2, 3, 4].map((number) => (
                      <div className="strip_booking" key={number}>
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
                              Hotel Mariott Paris
                              <span>2 Adults / 2 Nights</span>
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
                  </>
                )}
              </section>

              {/* End section 1 */}
              <section id="section-2">
                Tours
                {showTours && (
                  <>
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
                                  src={
                                    tour?.images[0]?.name
                                      ? `http://localhost:3000/api/upload/file/${tour?.images[0]?.folderName}/fileName/${tour?.images[0]?.name}`
                                      : "img/restaurant_box_1.jpg"
                                  }
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
                                <a
                                  class="tooltip_flip tooltip-effect-1"
                                  href="#"
                                >
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

              {/* End section 2 */}
              <section id="section-3">
                Hotels
                {showHotels && (
                  <>
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
                                  src={
                                    grid?.images[0]?.name
                                      ? `http://localhost:3000/api/upload/file/${grid?.images[0]?.folderName}/fileName/${grid?.images[0]?.name}`
                                      : "img/tour_box_1.jpg"
                                  }
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
                    <button
                      type="submit"
                      className="btn_1 green"
                      onClick={(e) => handleCreateHotel(e)}
                    >
                      Create Hotel
                    </button>
                  </>
                )}
              </section>

              <section id="section-4">
                Transports
                {showTransports && (
                  <>
                    <div class="row">
                      {transportsListShow?.length === 0 ? (
                        <h3
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          No Transport To Show
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
                                        src={
                                          transportGrid?.images[0]?.name
                                            ? `http://localhost:3000/api/upload/file/${transportGrid?.images[0]?.folderName}/fileName/${transportGrid?.images[0]?.name}`
                                            : "img/tour_box_1.jpg"
                                        }
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
                    <button
                      type="submit"
                      className="btn_1 green"
                      onClick={(e) => handleCreateTransport(e)}
                    >
                      Create Transport
                    </button>
                  </>
                )}
              </section>

              <section id="section-5">
                Restaurants
                {showRestaurants && (
                  <div className="row">
                    {restaurants.map((restaurant) => (
                      <div
                        className="col-md-6 wow zoomIn"
                        data-wow-delay="0.1s"
                        key={restaurant._id}
                      >
                        <div className="tour_container">
                          <div className="ribbon_3 popular">
                            <span>Popular</span>
                          </div>
                          <div className="img_container">
                            <a href="single_restaurant.html">
                              <img
                                src={
                                  restaurant?.images[0]?.name
                                    ? `http://localhost:3000/api/upload/file/${restaurant?.images[0]?.folderName}/fileName/${restaurant?.images[0]?.name}`
                                    : "img/restaurant_box_1.jpg"
                                }
                                width={800}
                                height={533}
                                className="img-fluid"
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div className="tour_title">
                            <h3>
                              <strong>{restaurant.name}</strong>
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
                                  handleUpdateRestaurant(e, restaurant._id)
                                }
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
                                onClick={(e) =>
                                  handleDeleteRestaurant(e, restaurant._id)
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
                                  handleDetailRestaurant(e, restaurant._id)
                                }
                              >
                                Details
                              </Button>
                            </div>
                          </div>
                        </div>
                        {/* End box tour */}
                      </div>
                    ))}
                    {/* End col-md-6 */}
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
                  </div>
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
