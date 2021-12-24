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
import HotelGrid from "./HotelGrid";

const All_hotels_grid = ({
  indexOfFirstPage,
  indexOfLastPage,
  postsPerPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const history = useHistory();
  const [hotels, setHotels] = useState([]);

  const statehotels = useSelector((state) => state.hotels);
  const [selectedOption, setSelectedOption] = useState();
  useEffect(async () => {
    if (statehotels.hotels.length === 0) {
      const data = await dispatch(getAllHotels());
      const hotelList = data.data;
      console.log(hotelList);
      const currentHotels = hotelList?.slice(indexOfFirstPage, indexOfLastPage);
      setHotels(currentHotels);
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
    let id = props;
    await dispatch(deleteHotel(id));
    await dispatch(getAllHotels());
  };

  const handleUpdateHotel = async (e, props) => {
    e.preventDefault();

    let id = props._id;
    let name = props.name;
    let description = props.description;
    let images = props.images;

    await dispatch(updateHotel(id, name, description, images));
    history.push(`/update_hotel/${props._id}`);
  };

  const handleDetailHotel = async (e, props) => {
    e.preventDefault();
    let id = props;

    await dispatch(getHotelByID(id));
    history.push(`/single_hotel/${props}`);
  };

  const handleAddHotel = (e) => {
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
              <p>You can Book good and great hotels of Paksitan .</p>
            </div>
          </div>
        </section>
        {/* End section */}
        <main>
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
                    onClick={handleAddHotel}
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
                    <HotelGrid
                      hotels={hotels}
                      handleDeleteHotel={handleDeleteHotel}
                      handleDetailHotel={handleDetailHotel}
                      handleUpdateHotel={handleUpdateHotel}
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

export default All_hotels_grid;
