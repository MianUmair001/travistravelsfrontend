import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";

import {
  deleteTransportByID,
  getALlTransport,
  getTransportByid,
  updateTransport,
} from "../../../../redux/actions/transport.action";

const All_transfer_list = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [transportsListShow, setTransportsListShow] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const role = useSelector((state) => state.auth.role);

  const statetransports = useSelector((state) => state.transports);
  console.log(statetransports.transports, "ia ma");
  useEffect(async () => {
    if (statetransports.transports.length === 0) {
      const { data } = await dispatch(getALlTransport());
      console.log(data);
      const currentTransports = data?.slice(indexOfFirstPage, indexOfLastPage);
      setTransportsListShow(currentTransports);
      setTransportsListShow(data);
      console.log("I am in store value check if");
    } else {
      const stateCurrentTransports = statetransports.transports?.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setTransportsListShow(stateCurrentTransports);
    }
  }, [statetransports.transports, transportsListShow]);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(statetransports.transports?.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value);
    if (value === "lower") {
      transportsListShow?.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else {
      transportsListShow?.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
          data-image-src="img/transfer_top.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1>Paris transfer</h1>
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
                      <Link to="/all_transfer_grid" className="bt_filters">
                        <i className="icon-th" />
                      </Link>{" "}
                      <Link to="/all_transfer_list" className="bt_filters">
                        <i className=" icon-list" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*/tools */}
                {transportsListShow?.map((transportList) => (
                  <div
                    className="strip_all_tour_list wow fadeIn"
                    data-wow-delay="0.1s"
                    key={transportList._id}
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="ribbon_3 popular">
                          <span>Popular</span>
                        </div>
                        <div className="wishlist">
                          <a className="tooltip_flip tooltip-effect-1">
                            +
                            <span className="tooltip-content-flip">
                              <span className="tooltip-back">
                                Add to wishlist
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="img_list">
                          <a href="single_transfer.html">
                            <img src="img/transfer_2.jpg" alt="Image" />
                            <div className="short_info" />
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
                            <strong>{transportList.name}</strong> shared
                          </h3>
                          <p>{transportList.description}</p>
                          <ul className="add_info">
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-70" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Passengers</h4> Up to 6 passengers.
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-6" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Pick up</h4> Hotel pick up or different
                                  place with an extra cost.
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-13" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Accessibility</h4> On request
                                  accessibility available.
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-22" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Pet allowed</h4> On request pet allowed.
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="tooltip_styled tooltip-effect-4">
                                <span className="tooltip-item">
                                  <i className="icon_set_1_icon-33" />
                                </span>
                                <div className="tooltip-content">
                                  <h4>Baggage</h4> Large baggage drop available.
                                </div>
                              </div>
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
                                    handleUpdateTransport(e, transportList)
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
                                    handleDeleteTransport(e, transportList)
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
                            PKR {transportList.pricePerKillomter}
                            <small>Price per killometer</small>
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
                                  handleDetailTransport(e, transportList)
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
export default All_transfer_list;
