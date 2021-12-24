import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

import {
  deleteHotel,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../../redux/actions/hotels.action";

const All_hotels_list = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();

  const [hotels, setHotels] = useState([]);
  const history = useHistory();
  const statehotels = useSelector((state) => state.hotels);
  const role = useSelector((state) => state.auth.role);
  const [selectedOption, setSelectedOption] = useState();
  useEffect(async () => {
    if (statehotels.hotels.length === 0) {
      const data = await dispatch(getAllHotels());
      const hotelList = data.data;
      const currentHotels = hotelList?.slice(indexOfFirstPage, indexOfLastPage);
      setHotels(currentHotels);
      console.log(hotelList);
    } else {
      const stateCurrentHotels = statehotels.hotels?.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setHotels(stateCurrentHotels);
    }
  }, [statehotels.hotels]);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(statehotels.hotels?.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value);
    if (value === "lower") {
      hotels?.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else {
      hotels?.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
  };
  const handleDeleteHotel = async (e, props) => {
    e.preventDefault();
    await dispatch(deleteHotel(props));
    await dispatch(getAllHotels());
  };
  const handleDetailHotel = async (e, props) => {
    e.preventDefault();

    await dispatch(getHotelByID(props));
    history.push(`/single_hotel/${props}`);
  };

  const handleUpdateHotel = async (e, props) => {
    e.preventDefault();

    await dispatch(getHotelByID(props._id));
    history.push(`/update_hotel/${props._id}`);
  };
  const handleAddRoom = (e, id) => {
    e.preventDefault();
    history.push(`/create_room/${id}`);
  };

  const addHotelHandler = (e) => {
    e.preventDefault();
    history.push("/create_hotel");
  };

  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="img/Hotels/hotel-header.png"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1>Pakistan Hotels</h1>
              <p>Book Pakistan's Good and Great hotels</p>
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
                    onClick={addHotelHandler}
                  >
                    Add More Hotel
                  </Button>
                </p>

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
                      <Link to="/all_hotels_grid" className="bt_filters">
                        <i className="icon-th" />
                      </Link>{" "}
                      <Link to="/all_hotels_list" className="bt_filters">
                        <i className=" icon-list" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*End tools */}
                {hotels?.length === 0 ? (
                  <h3 style={{ display: "flex", justifyContent: "center" }}>
                    No Hotels To Show
                  </h3>
                ) : (
                  <div>
                    {hotels?.map((hotel) => (
                      <div
                        className="strip_all_tour_list wow fadeIn"
                        data-wow-delay="0.1s"
                        key={hotel._id}
                      >
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="ribbon_3 popular">
                              <span>Popular</span>
                            </div>

                            <div className="img_list">
                              <a href="single_hotel.html">
                                <img
                                  src={
                                    hotel?.images[0]?.name
                                      ? `http://localhost:3000/api/upload/file/${hotel?.images[0]?.folderName}/fileName/${hotel?.images[0]?.name}`
                                      : "img/tour_box_1.jpg"
                                  }
                                  alt="Image"
                                />
                                <div className="short_info" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="tour_list_desc">
                              <h3>
                                <strong>{hotel.name}</strong>
                              </h3>
                              <p>{hotel.description.split(".")[0]}</p>

                              {role === "admin" && (
                                <div
                                  className="row"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>
                                    <Button
                                      variant="contained"
                                      size="small"
                                      className="btn mt-4"
                                      startIcon={<Edit />}
                                      style={{
                                        backgroundColor: "green",
                                        color: "white",
                                      }}
                                      onClick={(e) =>
                                        handleUpdateHotel(e, hotel)
                                      }
                                    >
                                      Update
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      variant="contained"
                                      size="small"
                                      className="btn mt-4"
                                      startIcon={<Edit />}
                                      style={{
                                        backgroundColor: "green",
                                        color: "white",
                                      }}
                                      onClick={(e) =>
                                        handleAddRoom(e, hotel._id)
                                      }
                                    >
                                      Add Room
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      variant="outlined"
                                      size="small"
                                      className="btn mt-4"
                                      startIcon={<DeleteOutlined />}
                                      style={{ color: "red" }}
                                      onClick={(e) =>
                                        handleDeleteHotel(e, hotel._id)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <div className="price_list">
                              <div>
                                {/* PKR:
                                {hotel.price}
                                <small>*From/Per night</small> */}
                                <p>
                                  <Button
                                    type="submit"
                                    style={{
                                      backgroundColor: "green",
                                      color: "white",
                                    }}
                                    startIcon={<Info />}
                                    className="btn_1"
                                    onClick={(e) =>
                                      handleDetailHotel(e, hotel._id)
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
                  </div>
                )}

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
                        <a
                          onClick={() => paginate(number)}
                          className="page-link"
                        >
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
      </div>
    </>
  );
};

export default All_hotels_list;
