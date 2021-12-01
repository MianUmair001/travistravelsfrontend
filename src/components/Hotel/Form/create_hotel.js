import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { HotelOutlined } from "@material-ui/icons";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

import {
  createHotel,
  getAllHotels,
} from "../../../redux/actions/hotels.action";
import { uploadImage } from "../../../redux/actions/upload.action";

const CreateHotel = ({ history }) => {
  const dispatch = useDispatch();

  const hotelID = useSelector((state) => state.hotel.hotelID);
  const userID = useSelector((state) => state.auth.user);

  const [hotelName, setHotelName] = useState("Lahore Hotel");
  const [hotelPrice, setHotelPrice] = useState(20000);
  const [description, setDescription] = useState(
    "A Five Star Hotel Located In Naran"
  );
  const [images, setImages] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const createHotelHandler = async (e) => {
    e.preventDefault();

    const response = await dispatch(
      createHotel(hotelName, hotelPrice, description, images, userID)
    );
    console.log(response);
    if (response !== undefined) {
      setShowSuccessMessage(true);
    }
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
                      <h4>Create Hotel</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hotel Name</label>
                        <input
                          className="form-control"
                          name="hotelName"
                          type="text"
                          value={hotelName}
                          onChange={(e) => setHotelName(e.target.value)}
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
                          value={hotelPrice}
                          onChange={(e) => setHotelPrice(e.target.value)}
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
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <hr />
                  <h4>Upload photo</h4>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        multiple
                        onChange={async (e) => {
                          let formData = new FormData();
                          formData.append("file", e.target.files[0]);
                          formData.append("isPlaceImage", true);
                          const { data } = await dispatch(
                            uploadImage(formData)
                          );
                          setImages(data);
                        }}
                      />
                    </div>
                  </div>
                  {/* Drop Zone */}

                  <hr />
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      textTransform: "unset",
                    }}
                    className="btn btn_full_outline py-2 px-5"
                    onClick={createHotelHandler}
                    startIcon={<HotelOutlined />}
                  >
                    Create Hotel
                  </Button>
                  {showSuccessMessage ? (
                    <h6 className="mt-3">
                      Hotel Created Successfully!
                      <Link
                        to={`/single_hotel/${hotelID}`}
                        style={{ marginLeft: "3px", color: "green" }}
                      >
                        View Hotel
                      </Link>
                    </h6>
                  ) : null}
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

export default CreateHotel;
