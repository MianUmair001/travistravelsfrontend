import { Button } from "@material-ui/core";
import { Delete, Edit, Info } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteRestaurant,
  getAllRestaurants,
  updateRestaurant,
} from "../../../redux/actions/restaurant.action";
import RestaurantGrid from "./RestaurantGrid";

const All_restaurants_grid = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([]);
  const staterestaurants = useSelector((state) => state.restaurants);
  console.log(staterestaurants, "ia ma");
  const role = useSelector((state) => state.auth.role);
  const [selectedOption, setSelectedOption] = useState();
  useEffect(async () => {
    if (staterestaurants.restaurants.length === 0) {
      const { data } = await dispatch(getAllRestaurants());
      console.log("I am data in File", data);
      const currentRestaurants = data?.slice(indexOfFirstPage, indexOfLastPage);
      setRestaurants(currentRestaurants);
    } else {
      const stateCurrentRestaurants = staterestaurants.restaurants?.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setRestaurants(stateCurrentRestaurants);
    }
  }, [staterestaurants.restaurants]);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(staterestaurants.restaurants?.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value);
    if (value === "lower") {
      restaurants?.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else {
      restaurants?.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
  };
  // const handleDeleteResturant = async (e, id) => {
  //   e.preventDefault();
  //   await dispatch(deleteRestaurant(id));
  //   await dispatch(getAllRestaurants());
  // };

  // const handleUpdateRestaurant = async (e, list) => {
  //   e.preventDefault();
  //   await dispatch(
  //     updateRestaurant(
  //       list.id,
  //       list.name,
  //       list.description,
  //       list.address,
  //       list.noOfTables,
  //       list.openingTime,
  //       list.menu,
  //       list.images
  //     )
  //   );
  //   history.push(`/update_restaurant/${list._id}`);
  // };

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

  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/restaurant_top.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Pakistan restaurants</h1>
            <p>Best Restaurant in Pakistan</p>
          </div>
        </div>
      </section>
      {/* End section */}
      <main>
        {/* Position */}
        <div className="collapse" id="collapseMap">
          <div id="map" className="map" />
        </div>
        {/* End Map */}
        <div className="container margin_60">
          <div className="row">
            <aside className="col-lg-3">
              <div className="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <a href="#" id="active">
                      <i className="icon_set_3_restaurant-10" />
                      All restaurants <span>({restaurants.length})</span>
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
                    <Link to="/all_restaurants_grid" className="bt_filters">
                      <i className="icon-th" />
                    </Link>
                    <Link to="/all_restaurants_list" className="bt_filters">
                      <i className=" icon-list" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*End tools */}
              <RestaurantGrid
                restaurants={restaurants}
                handleDeleteRestaurant={handleDeleteRestaurant}
                handleDetailRestaurant={handleDetailRestaurant}
                handleUpdateRestaurant={handleUpdateRestaurant}
                role={role}
              />

              {/* End row */}

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
            {/* End col lg 9 */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </main>
      {/* End main */}
    </>
  );
};

export default All_restaurants_grid;
