import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { HotelOutlined } from "@material-ui/icons";

import { updateHotel } from "../../../redux/actions/hotels.action";

const UpdateHotel = ({ history }) => {
  const dispatch = useDispatch();

  const { hotelID, hotelName, price, description, images } = useSelector(
    (state) => state.hotel
  );
  // console.log("hotelState", hotelID, hotelName, description, images);

  const [hotelName_, setHotelName_] = useState(hotelName);
  const [hotelPrice_, setHotelPrice_] = useState(price);
  const [description_, setDescription_] = useState(description);
  const [images_, setImages_] = useState([images]);

  const updateHotelHandler = async (e) => {
    e.preventDefault();

    dispatch(updateHotel(hotelID, hotelName_, hotelPrice_, description_, images_));
    history.push(`/single_hotel/${hotelID}`);
  };

  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="img/admin_top.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1 style={{ textTransform: "uppercase" }}>Hello Ibrar!</h1>
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Category</Link>
                </li>
                <li>Create Hotel</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="margin_60 container">
            <div>
              <div className="content1">
                {/* End row */}

                <section>
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Update Hotel</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hotel Name</label>
                        <input
                          className="form-control"
                          name="hotelName"
                          type="text"
                          value={hotelName_}
                          onChange={(e) => setHotelName_(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          className="form-control"
                          name="Price"
                          type="text"
                          value={hotelPrice_}
                          onChange={(e) => setHotelPrice_(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          className="form-control"
                          name="description"
                          type="text"
                          value={description_}
                          onChange={(e) => setDescription_(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <hr />
                  <h4>Upload profile photo</h4>
                  <div className="form-inline upload_1">
                    <div className="form-group">
                      <input
                        type="file"
                        name="files[]"
                        id="js-upload-files"
                        value={images_}
                        multiple
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn_1 green"
                      id="js-upload-submit"
                    >
                      Upload file
                    </button>
                  </div>
                  {/* Drop Zone */}
                  <h5>Or drag and drop files below</h5>
                  <div className="upload-drop-zone" id="drop-zone">
                    Just drag and drop files here
                  </div>
                  {/* Progress Bar */}
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span className="sr-only">60% Complete</span>
                    </div>
                  </div>
                  {/* Upload Finished */}
                  <div className="js-upload-finished">
                    <h5>Processed files</h5>
                    <div className="list-group">
                      <a
                        href="#"
                        className="list-group-item list-group-item-success"
                      >
                        <span className="badge alert-success pull-right">
                          Success
                        </span>
                        image-01.jpg
                      </a>
                    </div>
                  </div>
                  {/* End Hidden on mobiles */}
                  <hr />
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      textTransform: "unset",
                    }}
                    className="btn btn_full_outline py-2 px-5"
                    onClick={updateHotelHandler}
                    startIcon={<HotelOutlined />}
                  >
                    Update Hotel
                  </Button>
                </section>
                {/* End section 4 */}
              </div>
              {/* End content */}
            </div>
            {/* End tabs */}
          </div>
          {/* end container */}
        </main>
        {/* End main */}
      </div>
    </>
  );
};

export default UpdateHotel;
