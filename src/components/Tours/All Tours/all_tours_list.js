import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTour, getTours } from "../../../redux/actions/tour.action";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Edit, Delete, Info } from "@material-ui/icons";

const All_tours_list = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);

  const role = useSelector((state) => state.auth.user.role);

  const statetours = useSelector((state) => state.tours);
  console.log(statetours.tours, "ia ma");
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

  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="../../../img/bg.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Paris tours</h1>
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
        {/* Position */}
        <div className="collapse" id="collapseMap">
          <div id="map" className="map" />
        </div>
        {/* End Map */}
        <div className="container margin_60">
          <div className="row">
            <aside className="col-lg-3">
              <p>
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
              <div className="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <a href="#" id="active">
                      <i className="icon_set_1_icon-51" />
                      All tours <span>(141)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-3" />
                      City sightseeing <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-4" />
                      Museum tours <span>(16)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-44" />
                      Historic Buildings <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-37" />
                      Walking tours <span>(11)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-14" />
                      Eat &amp; Drink <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-43" />
                      Churces <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon_set_1_icon-28" />
                      Skyline tours <span>(11)</span>
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
                  <i className="icon_set_1_icon-65" />
                  Filters
                </a>
                <div className="collapse show" id="collapseFilters">
                  <div className="filter_type">
                    <h6>Price</h6>
                    <input type="text" id="range" name="range" defaultValue />
                  </div>
                  <div className="filter_type">
                    <h6>Rating</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                            <i className="icon-smile" />
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filter_type">
                    <h6>Facility</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />
                          Pet allowed
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          Groups allowed
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          Tour guides
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          Access for disabled
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End collapse */}
              </div>
              {/*End filters col*/}
              <div className="box_style_2">
                <i className="icon_set_1_icon-57" />
                <h4>
                  Need <span>Help?</span>
                </h4>
                <a href="tel://004542344599" className="phone">
                  +45 423 445 99
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>
            {/*End aside */}
            <div className="col-lg-9">
              <div id="tools">
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-6">
                    <div className="styled-select-filters">
                      <select name="sort_price" id="sort_price">
                        <option value="sortByPrice">Sort by price</option>
                        <option value="lower">Lowest price</option>
                        <option value="higher">Highest price</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-6">
                    <div className="styled-select-filters">
                      <select name="sort_rating" id="sort_rating">
                        <option value="sortByRanking">Sort by ranking</option>
                        <option value="lower">Lowest ranking</option>
                        <option value="higher">Highest ranking</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 d-none d-sm-block text-right">
                    <Link to="all_tours_grid" className="bt_filters">
                      <i className="icon-th" />
                    </Link>

                    <a to="all_tours_grid" className="bt_filters">
                      <i className=" icon-list" />
                    </a>
                  </div>
                </div>
              </div>
              {/*/tools */}

              {tours &&
                tours?.map((tour) => (
                  <div
                    className="strip_all_tour_list wow fadeIn"
                    data-wow-delay="0.1s"
                    key={tour._id}
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="ribbon_3 popular">
                          <span>Popular</span>
                        </div>
                        <div className="wishlist">
                          <a className="tooltip_flip tooltip-effect-1" href="">
                            +
                            <span className="tooltip-content-flip">
                              <span className="tooltip-back">
                                Add to wishlist
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="img_list">
                          <a href="single_tour.html">
                            <img
                              src={
                                tour?.images[0]?.name
                                  ? `http://localhost:3000/api/upload/file/${tour?.images[0]?.folderName}/fileName/${tour?.images[0]?.name}`
                                  : "img/tour_box_1.jpg"
                              }
                              alt="Image"
                            />
                            <div className="short_info">
                              <i className="icon_set_1_icon-4" />
                              Museums{" "}
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tour_list_desc">
                          <div className="rating">
                            <i className="icon-smile voted" />
                            <i className="icon-smile  voted" />
                            <i className="icon-smile  voted" />
                            <i className="icon-smile  voted" />
                            <i className="icon-smile" />
                            <small>(75)</small>
                          </div>
                          <h3>
                            <strong>{tour.name}</strong> tour
                          </h3>
                          <p>{tour.description}</p>
                          <ul className="add_info">
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-83" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Schedule</h4>
                                  <strong>Monday to Friday</strong> 09.00 AM -
                                  5.30 PM
                                  <br />
                                  <strong>Saturday</strong> 09.00 AM - 5.30 PM
                                  <br />
                                  <strong>Sunday</strong>{" "}
                                  <span className="label label-danger">
                                    Closed
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-41" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Address</h4> Musée du Louvre, 75058 Paris
                                  - France
                                  <br />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-97" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Languages</h4> English - French - Chinese
                                  - Russian - Italian
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-27" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Parking</h4> 1-3 Rue Elisée Reclus
                                  <br /> 76 Rue du Général Leclerc
                                  <br /> 8 Rue Caillaux 94923
                                  <br />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-25" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Transport</h4>
                                  <strong>Metro: </strong>Musée du Louvre
                                  station (line 1)
                                  <br />
                                  <strong>Bus:</strong> 21, 24, 27, 39, 48, 68,
                                  69, 72, 81, 95
                                  <br />
                                </div>
                              </div>
                            </li>
                          </ul>
                          {role === "admin" && (
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
                                Update Tour
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
                                Delete Tour
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-2 col-md-2">
                        <div className="price_list">
                          <div>
                            <sup>$</sup>
                            {tour.price}*
                            <span className="normal_price_list">$99</span>
                            <small>*Per person</small>
                            <p>
                              <a
                                onClick={(e) => handleDetailTour(e, tour._id)}
                                className="btn_1"
                              >
                                Details
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <hr />
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      1<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* end pagination*/}
            </div>
            {/* End col lg-9 */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </main>
      {/* End main */}
    </>
  );
};

export default All_tours_list;
