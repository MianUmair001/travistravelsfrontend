import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  deleteHotel,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../../redux/actions/hotels.action";

const All_hotels_list = ({ history }) => {
  const dispatch = useDispatch();

  const [hotels, setHotels] = useState([]);

  const statehotels = useSelector((state) => state.hotels);
  const role = useSelector((state) => state.auth.role);

  useEffect(async () => {
    if (statehotels.hotels.length === 0) {
      const data = await dispatch(getAllHotels());
      const hotelList = data.data;
      setHotels(hotelList);
      console.log(hotelList);
    } else {
      setHotels(statehotels.hotels);
    }
  }, [statehotels.hotels, hotels]);

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
                        <select name="sort_price" id="sort_price">
                          <option value selected>
                            Sort by price
                          </option>
                          <option value="lower">Lowest price</option>
                          <option value="higher">Highest price</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_rating" id="sort_rating">
                          <option value selected>
                            Sort by ranking
                          </option>
                          <option value="lower">Lowest ranking</option>
                          <option value="higher">Highest ranking</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-4 d-none d-sm-block text-right">
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
                              <div className="score">
                                Superb<span>9.0</span>
                              </div>
                              <div className="rating">
                                <i className="icon-star voted" />
                                <i className="icon-star  voted" />
                                <i className="icon-star  voted" />
                                <i className="icon-star  voted" />
                                <i className="icon-star-empty" />
                              </div>
                              <h3>
                                <strong>{hotel.name}</strong>
                              </h3>
                              <p>{hotel.description}</p>
                              <ul className="add_info">
                                <li>
                                  <a
                                    className="tooltip-1"
                                    data-placement="top"
                                    title="Free Wifi"
                                  >
                                    <i className="icon_set_1_icon-86" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="tooltip-1"
                                    data-placement="top"
                                    title="Plasma TV with cable channels"
                                  >
                                    <i className="icon_set_2_icon-116" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="tooltip-1"
                                    data-placement="top"
                                    title="Swimming pool"
                                  >
                                    <i className="icon_set_2_icon-110" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="tooltip-1"
                                    data-placement="top"
                                    title="Fitness Center"
                                  >
                                    <i className="icon_set_2_icon-117" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="tooltip-1"
                                    data-placement="top"
                                    title="Restaurant"
                                  >
                                    <i className="icon_set_1_icon-58" />
                                  </a>
                                </li>
                              </ul>
                              {role === "admin" && (
                                <div className="row">
                                  <div class="col-sm-6">
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
                                  <div class="col-sm-6">
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
                                PKR:
                                {hotel.price}
                                <small>*From/Per night</small>
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
      </div>
    </>
  );
};

export default All_hotels_list;
