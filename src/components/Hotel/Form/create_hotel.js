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
import CreateRooms from "../../Admin/Rooms/CreateRooms";

const CreateHotel = ({ history }) => {
  const dispatch = useDispatch();

  const hotelID = useSelector((state) => state.hotel.hotelID);
  const userID = useSelector((state) => state.auth.user);
  const [newHotelId, setnewHotelId] = useState("");
  const [showRoomBtn, setshowRoomBtn] = useState(false);
  const [hotelName, setHotelName] = useState("Lahore Hotel");
  const [description, setDescription] = useState(
    "A Five Star Hotel Located In Naran"
  );
  const [images, setImages] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const auth = useSelector((state) => state.auth.user);
  const createHotelHandler = async (e) => {
    e.preventDefault();
    const { data } = await dispatch(
      createHotel(hotelName, description, images, userID)
    );
    console.log("I am Response", data.data._id);
    setnewHotelId(data.data._id);
    if (data !== undefined) {
      setShowSuccessMessage(true);
      setshowRoomBtn(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
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
              <h1 style={{ textTransform: "uppercase" }}>Create Hotel</h1>
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
                  <Link to="/all_hotels_list">Hotels</Link>
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
                          const data = await dispatch(uploadImage(formData));
                          const response = data?.data;
                          console.log("data", response);
                          setImages(response);
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
                  <br />
                  <br />
                  {showRoomBtn && (
                    <Button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        textTransform: "unset",
                      }}
                      className="btn btn_full_outline py-2 px-5"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(`/create_room/${newHotelId}`);
                      }}
                      startIcon={<HotelOutlined />}
                    >
                      Create Room
                    </Button>
                  )}
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
