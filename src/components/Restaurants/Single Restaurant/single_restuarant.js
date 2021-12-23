import { Button } from "@material-ui/core";
import { Delete, Edit, Info } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  deleteRestaurant,
  getAllRestaurants,
  getRestaurantById,
} from "../../../redux/actions/restaurant.action";
import { getImage } from "../../../redux/actions/upload.action";
import BookingForm from "../Booking/BookingForm";

const Single_restuarant = ({ history }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [menu, setMenu] = useState();
  const [addressName, setAddressName] = useState();
  const [country, setCountry] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [noOfTables, setNoOfTables] = useState();
  const [images, setImages] = useState();
  const [restaurant, setRestaurant] = useState();
  const [price, setPrice] = useState();
  const [schedule, setSchedule] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [url, setUrl] = useState();
  const [adultsQuantity, setAdultsQuantity] = useState(0);
  const dispatch = useDispatch();
  const [childrenQuantity, setChildrenQuantity] = useState(0);

  const restaurantId = useParams();
  console.log(restaurantId);
  const restaurants = useSelector((state) => state.restaurants);
  useEffect(async () => {
    const {
      data: {
        name,
        description,
        menu,
        address,
        noOfTables,
        images,
        schedule,
        price,
      },
    } = await dispatch(getRestaurantById(restaurantId.id));
    console.log(name, description, images[0].name);
    setName(name);
    setDescription(description);
    setMenu(menu);
    setAddressName(address.addressName);
    setCountry(address.country);
    setStreetAddress(address.streetAddress);
    setNoOfTables(noOfTables);
    setImages(images);
    setSchedule(schedule);
    setPrice(price);
    if (images.length != 0) {
      const link = await dispatch(
        getImage(images[0]?.name, images[0]?.folderName)
      );
      console.log(link);
      setUrl(link);
    }
  }, []);

  const handleBookClick = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/create_bookings/${restaurantId.id}`,
      state: {
        adultsQuantity,
        childrenQuantity,
        date,
        time,
        price: (Number(adultsQuantity) + Number(childrenQuantity)) * price,
        serviceName: name,
        serviceId: restaurantId.id,
        bookedServiceType: "Restaurant",
        bookedServiceId: restaurantId.id,
      },
    });
  };

  const handleUpdateRestaurant = (e) => {
    e.preventDefault();
    history.push(`/update_restaurant/${restaurantId.id}`);
  };
  const handleDeleteRestaurant = async (e) => {
    e.preventDefault();
    const response = await dispatch(deleteRestaurant(restaurantId.id));
    console.log(response);
    if (response.status === 200) {
      dispatch(getAllRestaurants());
      history.push("/all_restaurants_list");
    }
  };

  return (
    <>
      {console.log(menu, "I am Images wala object")}
      <section
        class="parallax-window"
        data-parallax="scroll"
        style={{ backgroundImage: `url(${url})` }}
        data-natural-width="1400"
        data-natural-height="470"
      >
        <div class="parallax-content-2">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <h1>{name}</h1>
                <span>{description?.split(".")[0] && description}</span>
              </div>
              <div class="col-md-4">
                <div id="price_single_main">
                  from/per Table{" "}
                  <span>
                    <sup>PKR</sup>
                    {price}
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
              <div>
                <Button
                  className="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                  onClick={handleUpdateRestaurant}
                >
                  Update Restaurant
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
                  onClick={handleDeleteRestaurant}
                >
                  Delete Restaurant
                </a>
                <br />
              </div>

              {/* Map button for tablets/mobiles */}
              <div className="row">
                <div className="col-lg-3">
                  <h3>Description</h3>
                </div>
                <div className="col-lg-9">
                  <h4>About us</h4>
                  <p>{description}</p>
                  <h4>Menu and dishes</h4>

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
                                  PKR :{menuItem?.price}
                                </span>
                              </div>
                            </a>
                          </div>
                          <div class="tour_title">
                            <h3>
                              <strong>{menuItem.name}</strong>
                            </h3>

                            {/* end rating */}
                          </div>
                        </div>
                        {/* End box tour */}
                      </div>
                    ))}
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
                        {schedule?.map((scheduleItem) => (
                          <tr key={scheduleItem._id}>
                            <td>{scheduleItem.nameOfTheDay}</td>
                            <td>
                              {scheduleItem.startTime} - {scheduleItem.endTime}
                            </td>
                          </tr>
                        ))}
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
              <BookingForm
                serviceName={name}
                bookedServiceId={restaurantId.id}
                bookedServiceType={"Restaurant"}
                price={price}
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

export default Single_restuarant;
