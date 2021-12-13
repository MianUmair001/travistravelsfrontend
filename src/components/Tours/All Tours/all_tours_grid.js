import React, { useEffect, useState } from "react";
import "../../../styles/style.css";
import { Link } from "react-router-dom";
import { Edit, Delete, Info } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import {
  deleteTour,
  getTours,
  getToursByType,
  updateTour,
} from "../../../redux/actions/tour.action";
import { useHistory } from "react-router-dom";
import { getImage } from "../../../redux/actions/upload.action";
import { getAllHotels } from "../../../redux/actions/hotels.action";
import axios from "axios";
import TourGrid from "./TourGrid";
const All_tours_grid = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);
  const [hotels, setHotels] = useState([]);
  const statetours = useSelector((state) => state.tours);
  const role = useSelector((state) => state.auth.user.role);
  const user = useSelector((state) => state.auth.user);
  console.log(statetours.tours, "ia ma");
  const [selectedOption, setSelectedOption] = useState();

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

  const addMoreToursHandler = async (e) => {
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
                      <span>({tours.length})</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="box_style_2">
                <i class="icon_set_1_icon-57"></i>
                <h4>
                  Need <span>Help?</span>
                </h4>
                <a href="tel://03244220705" class="phone">
                  03244220705
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>

            <div class="col-lg-9">
              <div id="tools">
                <div class="row">
                  <div class="col-md-3 col-sm-4 col-6">
                    <div class="styled-select-filters">
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
                    class="col-md-6 col-sm-4 d-none d-sm-block text-right"
                    style={{ marginLeft: "25%" }}
                  >
                    <a to="all_tours_grid" class="bt_filters">
                      <i class="icon-th"></i>
                    </a>

                    <Link to="all_tours_list" class="bt_filters">
                      <i class=" icon-list"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <TourGrid
                tours={tours}
                handleDeleteTour={handleDeleteTour}
                handleDetailTour={handleDetailTour}
                handleUpdateTour={handleUpdateTour}
                role={role}
              />

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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default All_tours_grid;
