import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

import {
  deleteTransportByID,
  getALlTransport,
  getTransportByid,
  updateTransport,
} from "../../../../redux/actions/transport.action";
import TransferGrid from "./TransferGrid";

const All_transfer_grid = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const history = useHistory();
  const [transportsListShow, setTransportsListShow] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  const statetransports = useSelector((state) => state.transports);
  console.log(statetransports.transports, "ia ma");
  useEffect(async () => {
    if (statetransports.transports.length === 0) {
      const { data } = await dispatch(getALlTransport());
      console.log(data);
      const currentTransport = data?.slice(indexOfFirstPage, indexOfLastPage);
      setTransportsListShow(currentTransport);
      console.log("I am in store value check if");
    } else {
      const stateCurrentTransport = statetransports.transports?.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setTransportsListShow(stateCurrentTransport);
    }
  }, [statetransports.transports]);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(statetransports.transports?.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(deleteTransportByID(props._id));
    await dispatch(getALlTransport());
  };

  const handleDetailTransport = async (e, props) => {
    e.preventDefault();

    await dispatch(getTransportByid(props._id));
    history.push(`/single_transfer/${props._id}`);
  };
  const handleChange = (value, selectOptionSetter) => {
    selectOptionSetter(value);
    if (value === "lower") {
      transportsListShow?.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else {
      transportsListShow?.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
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
          data-image-src="img/Transport/transport_header.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1>Pakistan Transports</h1>
              <p>Get the best Cars and Vehicle for your Tours</p>
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
                    No Transport To Show
                  </h3>
                ) : (
                  <div>
                    <TransferGrid
                      transportsListShow={transportsListShow}
                      handleDetailTransport={handleDetailTransport}
                      handleDeleteTransport={handleDeleteTransport}
                      handleUpdateTransport={handleUpdateTransport}
                      role={role}
                    />
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
