import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  deleteTour,
  getTour,
  updateTour,
} from "../../../redux/actions/tour.action";
import { getImage } from "../../../redux/actions/upload.action";

const Single_tour = ({ history }) => {
  const dispatch = useDispatch();
  //const history = useHistory();
  const tourId = useParams();
  const [tour, setTour] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adultsQuantity, setAdultsQuantity] = useState(0);
  console.log("I am Use params", tourId.id);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [url, setUrl] = useState("");
  useEffect(async () => {
    const { data } = await dispatch(getTour(tourId.id));
    console.log("I am the Data from getTour", data);
    setTour(data);
    if (data.images.length != 0) {
      const link = await dispatch(
        getImage(data?.images[0].name, data?.images[0].folderName)
      );
      console.log(link);
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
        serviceId: tour.id,
        bookedServiceType:"Tour",
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
                <h1>{tour.name}</h1>
                <span>{tour.description}</span>
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
                    <sup>$</sup>
                    {tour.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End section */}

      <main style={{ marginTop: "10%" }}>
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
        <div className="collapse" id="collapseMap">
          <div id="map" className="map" />
        </div>
        {/* End Map */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8" id="single_tour_desc">
              <div id="single_tour_feat">
                <ul>
                  <li>
                    <i className="icon_set_1_icon-4" />
                    Museum
                  </li>
                  <li>
                    <i className="icon_set_1_icon-83" />3 Hours
                  </li>
                  <li>
                    <i className="icon_set_1_icon-13" />
                    Accessibiliy
                  </li>
                  <li>
                    <i className="icon_set_1_icon-82" />
                    144 Likes
                  </li>
                  <li>
                    <i className="icon_set_1_icon-22" />
                    Pet allowed
                  </li>
                  <li>
                    <i className="icon_set_1_icon-97" />
                    Audio guide
                  </li>
                  <li>
                    <i className="icon_set_1_icon-29" />
                    Tour guide
                  </li>
                </ul>
              </div>
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
              <p className="d-none d-md-block d-block d-lg-none">
                <a
                  className="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                >
                  View on map
                </a>
              </p>

              {/* Map button for tablets/mobiles */}

              <div className="row">
                <div className="col-lg-3">
                  <h3>Description</h3>
                </div>
                <div className="col-lg-9">
                  {tour.description}

                  {/* End row  */}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Schedule</h3>
                </div>
                <div className="col-lg-9">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan={2}>1st March to 31st October</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>10.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>
                            <span className="label label-danger">Closed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>10.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <em>Last Admission</em>
                            </strong>
                          </td>
                          <td>
                            <strong>17.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan={2}>1st November to 28th February</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>10.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>
                            <span className="label label-danger">Closed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>09.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>10.00 - 17.30</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <em>Last Admission</em>
                            </strong>
                          </td>
                          <td>
                            <strong>17.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Reviews </h3>
                  <a
                    href="#"
                    className="btn_1 add_bottom_30"
                    data-toggle="modal"
                    data-target="#myReview"
                  >
                    Leave a review
                  </a>
                </div>
                <div className="col-lg-9">
                  <div id="general_rating">
                    11 Reviews
                    <div className="rating">
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile" />
                      <i className="icon-smile" />
                    </div>
                  </div>
                  {/* End general_rating */}
                  <div className="row" id="rating_summary">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          Position
                          <div className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </div>
                        </li>
                        <li>
                          Tourist guide
                          <div className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          Price
                          <div className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </div>
                        </li>
                        <li>
                          Quality
                          <div className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End row */}
                  <hr />
                  <div className="review_strip_single">
                    <img
                      src="img/avatar1.jpg"
                      alt="Image"
                      className="rounded-circle"
                    />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a lorem quis neque interdum consequat ut sed sem. Duis
                      quis tempor nunc. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile" />
                      <i className="icon-smile" />
                    </div>
                  </div>
                  {/* End review strip */}
                  <div className="review_strip_single">
                    <img
                      src="img/avatar3.jpg"
                      alt="Image"
                      className="rounded-circle"
                    />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a lorem quis neque interdum consequat ut sed sem. Duis
                      quis tempor nunc. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile" />
                      <i className="icon-smile" />
                    </div>
                  </div>
                  {/* End review strip */}
                  <div className="review_strip_single last">
                    <img
                      src="img/avatar2.jpg"
                      alt="Image"
                      className="rounded-circle"
                    />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a lorem quis neque interdum consequat ut sed sem. Duis
                      quis tempor nunc. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile voted" />
                      <i className="icon-smile" />
                      <i className="icon-smile" />
                    </div>
                  </div>
                  {/* End review strip */}
                </div>
              </div>
            </div>
            {/*End  single_tour_desc*/}
            <aside className="col-lg-4">
              <p className="d-none d-xl-block d-lg-block d-xl-none">
                <a
                  className="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                >
                  View on map
                </a>
              </p>
              <div className="box_style_1 expose">
                <h3 className="inner">- Booking -</h3>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        <i className="icon-calendar-7" /> Select a date
                      </label>
                      <input
                        className="date-pick form-control"
                        data-date-format="M d, D"
                        type="text"
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        <i className=" icon-clock" /> Time
                      </label>
                      <input
                        className="time-pick form-control"
                        type="text"
                        value={time}
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Adults</label>
                      <div className="numbers-row">
                        <input
                          type="number"
                          id="adults"
                          className="qty2 form-control"
                          name="quantity"
                          value={adultsQuantity}
                          onChange={(e) => setAdultsQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Children</label>
                      <div className="numbers-row">
                        <input
                          type="number"
                          id="children"
                          className="qty2 form-control"
                          name="quantity"
                          value={childrenQuantity}
                          onChange={(e) => setChildrenQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <table className="table table_summary">
                  <tbody>
                    <tr>
                      <td>Adults</td>
                      <td className="text-right">{adultsQuantity}</td>
                    </tr>
                    <tr>
                      <td>Children</td>
                      <td className="text-right">{childrenQuantity}</td>
                    </tr>
                    <tr>
                      <td>Total amount</td>
                      <td className="text-right">
                        {Number(adultsQuantity) + Number(childrenQuantity)}x $
                        {tour.price}
                      </td>
                    </tr>
                    <tr className="total">
                      <td>Total cost</td>
                      <td className="text-right">
                        ${" "}
                        {(Number(adultsQuantity) + Number(childrenQuantity)) *
                          tour.price}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  className="btn_full"
                  onClick={(e) => handleBookClick(e, tour)}
                >
                  Book now
                </a>
                <a className="btn_full_outline" href="#">
                  <i className=" icon-heart" /> Add to whislist
                </a>
              </div>
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
    </>
  );
};

export default Single_tour;
