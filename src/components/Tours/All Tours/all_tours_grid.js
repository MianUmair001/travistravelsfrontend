import React, { useEffect, useState } from "react";
import "../../../styles/style.css";
import { Link } from "react-router-dom";
import { Edit, Delete, Info } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import {
  deleteTour,
  getTours,
  updateTour,
} from "../../../redux/actions/tour.action";
import { useHistory } from "react-router-dom";
import { getImage } from "../../../redux/actions/upload.action";
import { getAllHotels } from "../../../redux/actions/hotels.action";

const All_tours_grid = ({ history }) => {
  const dispatch = useDispatch();
  const [tours, setTours] = useState([]);
  const [hotels, setHotels] = useState([]);
  const statetours = useSelector((state) => state.tours);

  useEffect(async () => {
    if (statetours.tours.length === 0) {
      const { data } = await dispatch(getTours());
      console.log(data);
      setTours(data);
    } else {
      setTours(statetours.tours);
    }
  }, [statetours.tours, tours]);

  const statehotels = useSelector((state) => state.hotels);
  useEffect(async () => {
    if (statehotels.hotels.length === 0) {
      const data = await dispatch(getAllHotels());
      console.log(data);
      setHotels(data);
    } else {
      setHotels(statehotels.hotels);
    }
  }, [statehotels.hotels, hotels]);

  const handleDetailTour = async (e, id) => {
    e.preventDefault();
    history.push(`/single_tour/${id}`);
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

  const addMoreToursHandler = async (e) => {
    e.preventDefault()

    history.push('/create_tour')
  }
  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/Tour/tour-header.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Pakistan Tours</h1>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
          </div>
        </div>
      </section>
      {/* End section */}

      <main>
        <div id="position">
          <div class="container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Tours</li>
            </ul>
          </div>
        </div>

        <div class="collapse" id="collapseMap">
          <div id="map" class="map"></div>
        </div>

        <div class="container margin_60">
          <div class="row">
            <aside class="col-lg-3">
              <p>
                <a
                  class="btn_map"
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
              <p>
                <a
                  class="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                  onClick={addMoreToursHandler}
                >
                  Add More Tours
                </a>
              </p>

              <div class="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <a href="#" id="active">
                      <i class="icon_set_1_icon-51"></i>All tours{" "}
                      <span>(141)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-3"></i>City sightseeing{" "}
                      <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-4"></i>Museum tours{" "}
                      <span>(16)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-44"></i>Historic Buildings{" "}
                      <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-37"></i>Walking tours{" "}
                      <span>(11)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-14"></i>Eat & Drink{" "}
                      <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-43"></i>Churces{" "}
                      <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon_set_1_icon-28"></i>Skyline tours{" "}
                      <span>(11)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div id="filters_col">
                <a
                  data-toggle="collapse"
                  href="#collapseFilters"
                  aria-expanded="false"
                  aria-controls="collapseFilters"
                  id="filters_col_bt"
                >
                  <i class="icon_set_1_icon-65"></i>Filters
                </a>
                <div class="collapse show" id="collapseFilters">
                  <div class="filter_type">
                    <h6>Price</h6>
                    <input type="text" id="range" name="range" value="" />
                  </div>
                  <div class="filter_type">
                    <h6>Rating</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />

                          <span class="rating">
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span class="rating">
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span class="rating">
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile"></i>
                            <i class="icon-smile"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span class="rating">
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile"></i>
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile"></i>
                            <i class="icon-smile"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span class="rating">
                            <i class="icon-smile voted"></i>
                            <i class="icon-smile"></i>
                            <i class="icon-smile"></i>
                            <i class="icon-smile"></i>
                            <i class="icon-smile"></i>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="filter_type">
                    <h6>Facility</h6>
                    <ul>
                      <li>
                        <label>
                          {" "}
                          Pet allowed
                          <input type="checkbox" />
                        </label>
                      </li>
                      <li>
                        <label>
                          {" "}
                          Groups allowed
                          <input type="checkbox" />
                        </label>
                      </li>
                      <li>
                        <label>
                          {" "}
                          Tour guides
                          <input type="checkbox" />
                        </label>
                      </li>
                      <li>
                        <label>
                          {" "}
                          Access for disabled
                          <input type="checkbox" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="box_style_2">
                <i class="icon_set_1_icon-57"></i>
                <h4>
                  Need <span>Help?</span>
                </h4>
                <a href="tel://004542344599" class="phone">
                  +45 423 445 99
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>

            <div class="col-lg-9">
              <div id="tools">
                <div class="row">
                  <div class="col-md-3 col-sm-4 col-6">
                    <div class="styled-select-filters">
                      <select name="sort_price" id="sort_price">
                        <option value="" selected>
                          Sort by price
                        </option>
                        <option value="lower">Lowest price</option>
                        <option value="higher">Highest price</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-6">
                    <div class="styled-select-filters">
                      <select name="sort_rating" id="sort_rating">
                        <option value="" selected>
                          Sort by ranking
                        </option>
                        <option value="lower">Lowest ranking</option>
                        <option value="higher">Highest ranking</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-4 d-none d-sm-block text-right">
                    <a to="all_tours_grid" class="bt_filters">
                      <i class="icon-th"></i>
                    </a>

                    <Link to="all_tours_list" class="bt_filters">
                      <i class=" icon-list"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="row">
                {tours.map((tour) => (
                  <div
                    class="col-md-6 wow zoomIn"
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
                            key={tour?.images[0]?._id}
                            alt={tour.name}
                            width="800"
                            height="533"
                            class="img-fluid"
                            alt="Image"
                          />
                          <div class="short_info">
                            <i class="icon_set_1_icon-44"></i>Historic Buildings
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
                              <span class="tooltip-back">Add to wishlist</span>
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

              <hr />

              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item active">
                    <span class="page-link">
                      1<span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default All_tours_grid;
