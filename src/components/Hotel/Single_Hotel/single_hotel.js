import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteHotel,
  getHotelByID,
  updateHotel,
} from "../../../redux/actions/hotels.action";
import { Link } from "react-router-dom";
import { getRooms } from "../../../redux/actions/rooms.action";
import BookingForm from "../../Restaurants/Booking/BookingForm";
import Feedback from "../../Others/Feedback";
import { getImage } from "../../../redux/actions/upload.action";

const Single_hotel = ({ history }) => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setselectedRoom] = useState();
  const user = useSelector((state) => state.auth.user);
  const [url, setUrl] = useState("");
  const userEmail = useSelector((state) => state.auth.userEmail);
  const { hotelID, hotelName, price, description, images } = useSelector(
    (state) => state.hotel
  );
  console.log("I am Images", images);
  useEffect(async () => {
    if (images?.length != 0) {
      console.log("I am Images", images);
      const link = await dispatch(
        getImage(images[0]?.name, images[0]?.folderName)
      );
      console.log("ImageLink", link);
      setUrl(link);
    }
  }, []);

  useEffect(async () => {
    console.log(hotelID);
    const { data } = await dispatch(getRooms(hotelID));
    console.log("I am Room Data", data);
    setRooms(data);
  }, []);

  const id = hotelID;
  const name = hotelName;

  //dispatch(getHotelByID(hotelID));

  const handleUpdateHotelPush = (e) => {
    e.preventDefault();
    dispatch(updateHotel(id, name, price, description, images));
    history.push(`/update_hotel/${id}`);
  };

  const handleDeleteHotel = (e) => {
    e.preventDefault();
    dispatch(deleteHotel(hotelID));
    history.push("/create_hotel");
  };
  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src={url}
          style={{ backgroundImage: `url(${url})` }}
          // data-image-src="img/Hotels/hotel-header.png"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-2">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <span className="rating">
                    <i className="icon-star voted" />
                    <i className="icon-star voted" />
                    <i className="icon-star voted" />
                    <i className="icon-star voted" />
                    <i className=" icon-star-empty" />
                  </span>
                  <h1>{hotelName}</h1>
                  <span>{description?.split(".")[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End section */}
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/all_hotels_list">Hotels</Link>
                </li>
                <li>Hotel</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="collapse" id="collapseMap">
            <div id="map" className="map" />
          </div>
          {/* End Map */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8" id="single_tour_desc">
                <p className="d-none d-md-block d-block d-lg-none">
                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleUpdateHotelPush}
                  >
                    Update Hotel
                  </Button>
                </p>

                <p className="d-none d-md-block d-block d-lg-none">
                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleDeleteHotel}
                  >
                    Delete Hotel
                  </Button>
                </p>

                <hr />
                <div className="row">
                  <div className="col-lg-3">
                    <h3>Description</h3>
                  </div>
                  <div className="col-lg-9">
                    <p>{description}</p>

                    {/* End row  */}
                  </div>
                  {/* End col-md-9  */}
                </div>
                {/* End row  */}
                <hr />
                <div className="row">
                  <div className="col-lg-3">
                    <h3>Rooms Types</h3>
                  </div>

                  {
                    <div class="row">
                      {rooms?.map((room) => (
                        <div
                          class="col-md-6 wow zoomIn"
                          data-wow-delay="0.3s"
                          key={room._id}
                        >
                          <div class="tour_container">
                            <div class="ribbon_3 popular">
                              <span>Popular</span>
                            </div>
                            <div class="img_container">
                              <a href="single_tour.html">
                                {console.log("I am Menu Item", room)}
                                <img
                                  src={
                                    room?.images[0]?.name
                                      ? `http://localhost:3000/api/upload/file/${room.images[0].folderName}/fileName/${room.images[0].name}`
                                      : "img/restaurant_box_1.jpg"
                                  }
                                  key={room?.images[0]?._id}
                                  alt=""
                                  width="800"
                                  height="533"
                                  class="img-fluid"
                                  alt="Image"
                                />
                                <div class="short_info">
                                  <span class="price">PKR :{room?.price}</span>
                                </div>
                              </a>
                            </div>
                            <div class="tour_title">
                              <h3>
                                <strong>Room</strong>
                              </h3>
                              {/* end rating */}
                            </div>
                            <Button onClick={() => setselectedRoom(room)}>
                              Buy Room
                            </Button>
                            {console.log(
                              "I am selected Room",
                              selectedRoom?.price
                            )}
                          </div>
                          {/* End box tour */}
                        </div>
                      ))}
                    </div>
                  }

                  {/* End col-md-9  */}
                </div>
                {/* End row  */}
                <hr />
                <Feedback
                  serviceId={id}
                  user={user}
                  userName={userEmail?.split("@")[0]}
                />
              </div>
              {/*End  single_tour_desc*/}
              <aside className="col-lg-4">
                <p className="d-none d-xl-block d-lg-block d-xl-none">
                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="Update Hotel"
                    onClick={handleUpdateHotelPush}
                  >
                    Update Hotel
                  </Button>
                </p>
                <p className="d-none d-xl-block d-lg-block d-xl-none">
                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleDeleteHotel}
                  >
                    Delete Hotel
                  </Button>
                </p>

                <BookingForm
                  serviceName={hotelName}
                  bookedServiceId={hotelID}
                  bookedServiceType={"Hotel"}
                  price={selectedRoom?.price}
                />
                {/*/box_style_1 */}
                <div className="box_style_4">
                  <i className="icon_set_1_icon-90" />
                  <h4>
                    <span>Book</span> by phone
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +45 423 445 99
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </aside>
            </div>
            {/*End row */}
          </div>
          {/*End container */}
          <div id="overlay" />
          {/* Mask on input focus */}
        </main>
        {/* End main */}
      </div>
    </>
  );
};

export default Single_hotel;
