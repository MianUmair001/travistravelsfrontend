import { Button } from "@material-ui/core";
import { Delete, Edit, Info } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  deleteRestaurant,
  getRestaurantById,
} from "../../../redux/actions/restaurant.action";

const Single_restuarant = ({ history }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [menu, setMenu] = useState();
  const [addressName, setAddressName] = useState();
  const [country, setCountry] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [noOfTables, setNoOfTables] = useState();
  const [images, setImages] = useState();
  const [price, setPrice] = useState();
  const [schedule, setSchedule] = useState();
  const dispatch = useDispatch();
  const tourId = useParams();
  const restaurants = useSelector((state) => state.restaurants);
  useEffect(async () => {
    const {
      data: { name, description, menu, address, noOfTables, images, schedule },
    } = await dispatch(getRestaurantById(tourId.id));
    console.log(name, description, images);
    setName(name);
    setDescription(description);
    setMenu(menu);
    setAddressName(address.addressName);
    setCountry(address.country);
    setStreetAddress(address.streetAddress);
    setNoOfTables(noOfTables);
    setImages(images);
    setSchedule(schedule);
  }, []);

  const handleUpdateRestaurant = (e) => {
    e.preventDefault();
    history.push(`/update_restaurant/${tourId.id}`);
  };
  const handleDeleteRestaurant = async (e) => {
    e.preventDefault();
    const response = await dispatch(deleteRestaurant(tourId.id));
    console.log("I am the response of Delete Tour", response);
  };

  return (
    <>
      {console.log(images, "I am Images wala object")}
      <section
        class="parallax-window"
        data-parallax="scroll"
        // data-image-src={
        //   images[0]?.name
        //     ? `http://localhost:3000/api/upload/file/${images[0]?.folderName}/fileName/${images[0]?.name}`
        //     : "img/restaurant_top_in.jpg"
        // }
        // data-image-src=""
        data-natural-width="1400"
        data-natural-height="470"
      >
        <div class="parallax-content-2">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <h1>{name}</h1>
                <span>{description}</span>
                <span class="rating">
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile"></i>
                  <small>(75)</small>
                </span>
              </div>
              <div class="col-md-4">
                <div id="price_single_main">
                  from/per person{" "}
                  <span>
                    <sup>$</sup>52
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <i className="icon_set_3_restaurant-1" />
                    Pizza /Italian
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
                    <i className="icon_set_1_icon-27" />
                    Parking
                  </li>
                  <li>
                    <i className="icon_set_1_icon-47" />
                    No smoking area
                  </li>
                </ul>
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
                  <h4>About us</h4>
                  <p>{description}</p>
                  <h4>Menu and dishes</h4>
                  <p>
                    Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo
                    aeterno legimus insolens ad. Sit cu detraxit constituam, an
                    mel iudico constituto efficiendi.
                  </p>
                  <div class="row">
                    {menu?.map((menuItem) => (
                      <div
                        class="col-md-6 wow zoomIn"
                        data-wow-delay="0.3s"
                        key={menuItem._id}
                      >
                        <div class="tour_container">
                          <div class="ribbon_3 popular">
                            <span>Popular</span>
                          </div>
                          <div class="img_container">
                            <a href="single_tour.html">
                              {console.log("I am Menu Item", menuItem)}
                              <img
                                src={
                                  menuItem?.images[0]?.name
                                    ? `http://localhost:3000/api/upload/file/${menuItem.images[0].folderName}/fileName/${menuItem.images[0].name}`
                                    : "img/restaurant_box_1.jpg"
                                }
                                key={menuItem?.images[0]?._id}
                                alt={menuItem?.name}
                                width="800"
                                height="533"
                                class="img-fluid"
                                alt="Image"
                              />
                              <div class="short_info">
                                <span class="price">
                                  <sup>$</sup>
                                  {menuItem.price}
                                </span>
                              </div>
                            </a>
                          </div>
                          <div class="tour_title">
                            <h3>
                              <strong>{menuItem.name}</strong>
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

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                              className="btn"
                            ></div>

                            {/* End wish list */}
                          </div>
                        </div>
                        {/* End box tour */}
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list_ok">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                        <li>Ut est saepe munere ceteros</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list_ok">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                        <li>No scripta electram necessitatibus sit</li>
                      </ul>
                    </div>
                  </div>
                  {/* End row  */}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Opening time</h3>
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
                          Service
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
                        defaultValue="12:00 AM"
                        type="text"
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
                          type="text"
                          defaultValue={1}
                          id="adults"
                          className="qty2 form-control"
                          name="quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Children</label>
                      <div className="numbers-row">
                        <input
                          type="text"
                          defaultValue={0}
                          id="children"
                          className="qty2 form-control"
                          name="quantity"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <a className="btn_full" href="payment_restaurant.html">
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

export default Single_restuarant;
