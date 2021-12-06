import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  deleteTransportByID,
  getALlTransport,
  getTransportByid,
  updateTransport,
} from "../../../../redux/actions/transport.action";

const All_transfer_grid = ({ history }) => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.user.role);

  const [transportsListShow, setTransportsListShow] = useState([]);

  const statetransports = useSelector((state) => state.transports);
  console.log(statetransports.transports, "ia ma");
  useEffect(async () => {
    if (statetransports.transports.length === 0) {
      const { data } = await dispatch(getALlTransport());
      console.log(data);
      setTransportsListShow(data);
      console.log("I am in store value check if");
    } else {
      setTransportsListShow(statetransports.transports);
    }
  }, [statetransports.transports, transportsListShow]);

  // useEffect(async () => {
  //   const transportListArray = await dispatch(getALlTransport());
  //   setTransportsListShow(transportListArray);
  //   return transportListArray;
  // }, [transportsListShow]);

  const handleDeleteTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(deleteTransportByID(props._id));
  };

  const handleDetailTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(getTransportByid(props._id));
    history.push(`/single_transfer/${props._id}`);
  };

  const handleUpdateTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(
      updateTransport(
        props._id,
        props.name,
        props.modelName,
        props.description,
        props.transportType,
        props.numberOfSeats,
        props.pricePerKillomter,
        props.AC,
        props.Availability,
        props.images
      )
    );
    history.push(`/update_transport/${props._id}`);
  };

  const handleAddTransport = (e) => {
    e.preventDefault();

    history.push("/create_transport");
  };

  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="img/hotels_bg.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1>Paris Hotels</h1>
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
                    onClick={handleAddTransport}
                  >
                    Add More Transport
                  </Button>
                </p>
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
                      <input type="text" id="range" name="range" />
                    </div>
                    <div className="filter_type">
                      <h6>Star Category</h6>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                            </span>
                            (15)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81" />
                            </span>
                            (45)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81" />
                              <i className="icon_set_1_icon-81" />
                            </span>
                            (35)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81" />
                              <i className="icon_set_1_icon-81" />
                              <i className="icon_set_1_icon-81" />
                            </span>
                            (25)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon_set_1_icon-81 voted" />
                              <i className="icon_set_1_icon-81" />
                              <i className="icon_set_1_icon-81" />
                              <i className="icon_set_1_icon-81" />
                              <i className="icon_set_1_icon-81" />
                            </span>
                            (15)
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="filter_type">
                      <h6>Review Score</h6>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Superb: 9+ (77)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Very good: 8+ (552)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Good: 7+ (909)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Pleasant: 6+ (1196)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            No rating (198)
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
                            Wifi
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Spa
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Restaurant
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Pool
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Parking
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Fitness center
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="filter_type">
                      <h6>District</h6>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Paris Centre
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            La Defance
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            La Marais
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Latin Quarter
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
                      <Link to="/All_transfer_grid" className="bt_filters">
                        <i className="icon-th" />
                      </Link>{" "}
                      <Link to="/All_transfer_list" className="bt_filters">
                        <i className=" icon-list" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*End tools */}
                {transportsListShow?.length === 0 ? (
                  <h3 style={{ display: "flex", justifyContent: "center" }}>
                    No Hotels To Show
                  </h3>
                ) : (
                  <div>
                    <div className="row">
                      {transportsListShow?.map((transportGrid) => (
                        <div
                          className="col-md-6 wow zoomIn"
                          data-wow-delay="0.1s"
                          key={transportGrid._id}
                        >
                          <div className="hotel_container">
                            <div className="ribbon_3 popular">
                              <span>Popular</span>
                            </div>
                            <div className="img_container">
                              <a href="single_hotel.html">
                                <img
                                  src={
                                    transportGrid?.images[0]?.name
                                      ? `http://localhost:3000/api/upload/file/${transportGrid?.images[0]?.folderName}/fileName/${transportGrid?.images[0]?.name}`
                                      : "img/tour_box_1.jpg"
                                  }
                                  width={800}
                                  height={533}
                                  className="img-fluid"
                                  alt="Image"
                                />
                                <div className="score">
                                  <span>7.5</span>Good
                                </div>
                                <div className="short_info hotel">
                                  price Per killometer
                                  <span className="price">
                                    <sup>$</sup>
                                    {transportGrid.pricePerKillomter}
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="hotel_title">
                              <h3>
                                <strong>{transportGrid.name}</strong>
                              </h3>
                              <div className="rating">
                                <i className="icon-star voted" />
                                <i className="icon-star voted" />
                                <i className="icon-star voted" />
                                <i className="icon-star voted" />
                                <i className="icon-star-empty" />
                              </div>
                              {/* end rating */}
                              <div className="wishlist">
                                <a
                                  className="tooltip_flip tooltip-effect-1"
                                  href="#"
                                >
                                  +
                                  <span className="tooltip-content-flip">
                                    <span className="tooltip-back">
                                      Add to wishlist
                                    </span>
                                  </span>
                                </a>
                              </div>

                              {/* End wish list*/}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                              className="btn"
                            >
                              {role === "admin" && (
                                <>
                                  <Button
                                    variant="contained"
                                    size="small"
                                    startIcon={<Edit />}
                                    style={{
                                      backgroundColor: "green",
                                      color: "white",
                                    }}
                                    onClick={(e) =>
                                      handleUpdateTransport(e, transportGrid)
                                    }
                                  >
                                    Update
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<DeleteOutlined />}
                                    style={{
                                      color: "red",
                                    }}
                                    onClick={(e) =>
                                      handleDeleteTransport(e, transportGrid)
                                    }
                                  >
                                    Delete
                                  </Button>
                                </>
                              )}
                              <Button
                                variant="outlined"
                                size="small"
                                startIcon={<Info />}
                                style={{
                                  backgroundColor: "green",
                                  color: "white",
                                }}
                                onClick={(e) =>
                                  handleDetailTransport(e, transportGrid)
                                }
                              >
                                Details
                              </Button>
                            </div>
                          </div>
                          {/* End box tour */}
                        </div>
                      ))}
                    </div>
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
              {/* End col lg 9 */}
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

export default All_transfer_grid;
