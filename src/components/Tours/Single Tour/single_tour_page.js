import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  deleteTour,
  getTour,
  updateTour,
} from "../../../redux/actions/tour.action";
import { getImage } from "../../../redux/actions/upload.action";
import Feedback from "../../Others/Feedback";
import BookingForm from "../../Restaurants/Booking/BookingForm";

const Single_tour = ({ history }) => {
  const dispatch = useDispatch();
  //const history = useHistory();
  const tourId = useParams();
  const [tour, setTour] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adultsQuantity, setAdultsQuantity] = useState(0);
  const role = useSelector((state) => state.auth.role);
  console.log("I am Use params", tourId.id);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [url, setUrl] = useState("");
  const userEmail = useSelector((state) => state.auth.userEmail);
  const user = useSelector((state) => state.auth.user);
  useEffect(async () => {
    const { data } = await dispatch(getTour(tourId.id));
    console.log("I am the Data from getTour", data);
    setTour(data);
    if (data?.images?.length != 0) {
      const link = await dispatch(
        getImage(data?.images[0].name, data?.images[0].folderName)
      );
      console.log("ImageLink", link);
      setUrl(link);
    }
  }, []);

  const handleUpdateClick = (e) => {
    e.preventDefault();
    history.push(`/update_tour/${tourId.id}`);
  };

  const handleBookClick = (e, tour) => {
    e.preventDefault();
    history.push({
      pathname: `/create_bookings/${tourId.id}`,
      state: {
        adultsQuantity,
        childrenQuantity,
        date,
        time,
        price: (Number(adultsQuantity) + Number(childrenQuantity)) * tour.price,
        serviceName: tour.name,
        serviceId: tourId.id,
        bookedServiceType: "Tour",
        bookedServiceId: tour._id,
      },
    });
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const response = await dispatch(deleteTour(tourId.id));
    console.log("I am the response of Delete Tour", response);
  };

  return (
    <>
      {console.log(url, "I am URL")}
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src={url}
        data-natural-width={1400}
        data-natural-height={470}
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="parallax-content-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>{tour?.name}</h1>
                <span>{tour?.description?.split(".")[0]}</span>
                <span className="rating">
                  <i className="icon-smile voted" />
                  <i className="icon-smile voted" />
                  <i className="icon-smile voted" />
                  <i className="icon-smile voted" />
                  <i className="icon-smile" />
                  <small>(75)</small>
                </span>
              </div>
              <div className="col-md-4">
                <div id="price_single_main">
                  from/per person{" "}
                  <span>
                    <sup>PKR</sup>
                    {tour?.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End section */}

      <main>
        {/* End Position */}

        {/* End Map */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8" id="single_tour_desc">
              {role === "admin" && (
                <div>
                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleUpdateClick}
                  >
                    Update Tour
                  </Button>
                  <br />
                  <a
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleDeleteClick}
                  >
                    Delete Tour
                  </a>
                  <br />
                </div>
              )}

              {/* Map button for tablets/mobiles */}

              <div className="row">
                <div className="col-lg-3">
                  <h3>Description</h3>
                </div>
                <div className="col-lg-9">
                  {tour?.description}

                  {/* End row  */}
                </div>
                <div className="col-lg-3">
                  <h3>No of Seats Available</h3>
                </div>
                <div className="col-lg-9">
                  {tour?.numberOfPeople}

                  {/* End row  */}
                </div>
              </div>
              <hr />
              {console.log(tour.places, "I am the places")}
              <div class="row">
                {tour?.places?.map((placeOne) => (
                  <div
                    class="col-md-6 wow zoomIn"
                    data-wow-delay="0.3s"
                    key={placeOne._id}
                  >
                    <div class="tour_container">
                      <div class="ribbon_3 popular">
                        <span>Popular</span>
                      </div>
                      <div class="img_container">
                        <a href="single_tour.html">
                          <img
                            src={
                              placeOne?.images[0]?.name
                                ? `http://localhost:3000/api/upload/file/${placeOne.images[0].folderName}/fileName/${placeOne.images[0].name}`
                                : "img/restaurant_box_1.jpg"
                            }
                            key={placeOne?.images[0]?._id}
                            alt={placeOne?.name}
                            width="800"
                            height="533"
                            class="img-fluid"
                            alt="Image"
                          />
                          <div class="short_info">
                            <span class="price">{placeOne?.price}</span>
                          </div>
                        </a>
                      </div>
                      <div class="tour_title">
                        <h3>
                          <strong>{placeOne.name}</strong>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <Feedback
                serviceId={tourId.id}
                user={user}
                userName={userEmail?.split("@")[0]}
              />
            </div>
            {/*End  single_tour_desc*/}
            <aside className="col-lg-4">
              <BookingForm
                serviceName={tour.name}
                bookedServiceId={tourId.id}
                bookedServiceType={"Tour"}
                price={tour.price}
              />

              {/*/box_style_1 */}
              <div className="box_style_4">
                <i className="icon_set_1_icon-90" />
                <h4>
                  <span>Book</span> by phone
                </h4>
                <a href="tel://03244220705" className="phone">
                  03244220705
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
    </>
  );
};

export default Single_tour;
