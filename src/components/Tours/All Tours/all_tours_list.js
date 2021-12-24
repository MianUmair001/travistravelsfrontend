import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteTour,
  getTours,
  getToursByType,
} from "../../../redux/actions/tour.action";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Edit, Delete, Info } from "@material-ui/icons";

const All_tours_list = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const role = useSelector((state) => state.auth.role);
  console.log("I am Role", role);
  const statetours = useSelector((state) => state.tours);
  console.log(statetours.tours, "ia ma");

  useEffect(async () => {
    if (statetours.tours.length === 0) {
      if (role === "admin") {
        const { data } = await dispatch(getToursByType("withtravistravels"));
        console.log(data);
        const stateCurrentTours = data?.slice(
          indexOfFirstPage,
          indexOfLastPage
        );
        setTours(stateCurrentTours);
        console.log("I am in store value check if");
      } else {
        const { data } = await dispatch(getToursByType("self"));
        console.log(data);
        const stateCurrentTours = data?.slice(
          indexOfFirstPage,
          indexOfLastPage
        );
        setTours(stateCurrentTours);
        console.log("I am in store value check if");
      }
    } else {
      const stateCurrentTours = statetours.tours?.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setTours(stateCurrentTours);
    }
  }, [statetours.tours]);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(statetours.tours?.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value);
    if (value === "lower") {
      tours?.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else {
      tours?.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
  };
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

  const addTourHandler = (e) => {
    e.preventDefault();

    history.push("/create_tour");
  };

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
            <p>Get Pakistan's Best Tours to Fill your hunger of travel</p>
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
                <Button
                  className="btn_map"
                  data-toggle="collapse"
                  href="#collapseMap"
                  aria-expanded="false"
                  aria-controls="collapseMap"
                  data-text-swap="Hide map"
                  data-text-original="View on map"
                  onClick={addTourHandler}
                >
                  Add More Tours
                </Button>
              </p>
              <div className="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <a href="#" id="active">
                      <i className="icon_set_1_icon-51" />
                      All tours <span>({tours.length})</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/*End filters col*/}
              <div className="box_style_2">
                <i className="icon_set_1_icon-57" />
                <h4>
                  Need <span>Help?</span>
                </h4>
                <a href="tel://03244220705" className="phone">
                  03244220705
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
                      <select
                        value={selectedOption}
                        name="sort_price"
                        id="sort_price"
                        onChange={(e) =>
                          handleChange(e.target.value, setSelectedOption)
                        }
                      >
                        <option>Sort By price</option>
                        <option value="lower">Lowest price</option>
                        <option value="higher">Highest price</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="col-md-6 col-sm-4 d-none d-sm-block text-right"
                    style={{ marginLeft: "25%" }}
                  >
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
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tour_list_desc">
                          <h3>
                            <strong>{tour.name}</strong> tour
                          </h3>
                          <p>{tour.description.split(".")[0]}</p>

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
                        <div
                          className="price_list"
                          style={{ fontSize: "20px" }}
                        >
                          <div>
                            PKR
                            {tour.price}
                            <small>*Per person</small>
                            <p>
                              <Button
                                onClick={(e) => handleDetailTour(e, tour._id)}
                                className="btn_1"
                                style={{
                                  backgroundColor: "green",
                                  color: "white",
                                }}
                              >
                                Details
                              </Button>
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
                    <a className="page-link" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {pageNumbers.map((number) => (
                    <li className="page-item">
                      <a onClick={() => paginate(number)} className="page-link">
                        {number}
                      </a>
                    </li>
                  ))}
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
