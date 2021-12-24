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

const All_restaurants_list = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const [restaurants, setRestaurants] = useState([]);
  const history = useHistory();
  const staterestaurants = useSelector((state) => state.restaurants);
  const [selectedOption, setSelectedOption] = useState();
  console.log(staterestaurants, "ia ma");
  const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value);
    if (value === "lower") {
      restaurants?.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else {
      restaurants?.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
  };
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

  const handleDeleteResturant = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteRestaurant(id));
    await dispatch(getAllRestaurants());
  };

  const handleDetailRestaurant = async (e, id) => {
    e.preventDefault();
    history.push(`/single_restaurant/${id}`);
  };

  const handleEditResturant = async (e, restaurant) => {
    e.preventDefault();
    await dispatch(
      updateRestaurant(
        restaurant.id,
        restaurant.name,
        restaurant.description,
        restaurant.address,
        restaurant.noOfTables,
        restaurant.openingTime,
        restaurant.menu,
        restaurant.images
      )
    );
    history.push(`/update_restaurant/${restaurant._id}`);
  };

  const handleCreateRestuarant = (e) => {
    e.preventDefault();

    history.push("/create_restaurant");
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
                  onClick={handleCreateRestuarant}
                >
                  Add More restuarant
                </Button>
              </p>
              <div className="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <a id="active">
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
                  {/* <div className="col-md-3 col-sm-4 col-6">
                    <div className="styled-select-filters">
                      <select name="sort_rating" id="sort_rating">
                        <option value selected>
                          Sort by ranting
                        </option>
                        <option value="lower">Lowest ranking</option>
                        <option value="higher">Highest ranking</option>
                      </select>
                    </div>
                  </div> */}
                  <div
                    className="col-md-6 col-sm-4 d-none d-sm-block text-right"
                    style={{ marginLeft: "25%" }}
                  >
                    <Link to="/all_restaurants_grid" className="bt_filters">
                      <i className="icon-th" />
                    </Link>
                    <Link to="all_restaurants_list" className="bt_filters">
                      <i className="icon-list" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*/tools */}
              {restaurants?.map((restaurant) => (
                <div
                  key={restaurant._id}
                  className="strip_all_tour_list wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="ribbon_3 popular">
                        <span>Popular</span>
                      </div>

                      <div className="img_list">
                        <a href="single_restaurant.html">
                          <img
                            src={
                              restaurant?.images[0]?.name
                                ? `http://localhost:3000/api/upload/file/${restaurant?.images[0]?.folderName}/fileName/${restaurant?.images[0]?.name}`
                                : "img/restaurant_box_1.jpg"
                            }
                            alt="Image"
                          />
                          <div className="short_info">
                            <i className="icon_set_3_restaurant-2" /> Fast food
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
                          <strong> {restaurant.name} </strong> restaurant
                        </h3>
                        <p>
                          {restaurant?.description.split(".")[0]
                            ? restaurant?.description.split(".")[0]
                            : restaurant?.description}
                        </p>

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
                            onClick={(e) => handleEditResturant(e, restaurant)}
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
                            onClick={(e) =>
                              handleDeleteResturant(e, restaurant._id)
                            }
                          >
                            Delete
                          </Button>
                          {/* <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<Info />}
                                    style={{
                                      backgroundColor: "green",
                                      color: "white",
                                    }}
                                    onClick={(e) => handleDetailPlan(e, list._id)}
                                  >
                                    Details
                                  </Button> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                      <div className="price_list">
                        <div>
                          <p>
                            <Button
                              variant="outlined"
                              size="small"
                              startIcon={<Info />}
                              style={{
                                backgroundColor: "green",
                                color: "white",
                              }}
                              onClick={(e) =>
                                handleDetailRestaurant(e, restaurant._id)
                              }
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

              {/*End strip */}

              {/*End strip */}

              {/*End strip */}
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

export default All_restaurants_list;
