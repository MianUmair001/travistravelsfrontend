import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import {
  deleteHotel,
  findByUserId,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../../redux/actions/hotels.action";
import HotelGrid from "../../Hotel/All_Hotels/HotelGrid";

const HotelManagerDashboard = () => {
  const [hotels, setHotels] = useState([]);
  const statehotels = useSelector((state) => state.hotels);
  const role = useSelector((state) => state.auth.role);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(async () => {
  //   if (statehotels.hotels.length === 0) {
  //     if (role === "hotelManager") {
  //       const { data } = await dispatch(findByUserId(user));
  //       const hotelList = data;
  //       console.log("I am hotels Data Sai wala ", data);
  //       setHotels(hotelList);
  //     } else {
  //       const { data } = await dispatch(getAllHotels());
  //       const hotelList = data;
  //       console.log("I am hotels Data Sai wala ", data);
  //       setHotels(hotelList);
  //     }
  //   } else {
  //     setHotels(statehotels.hotels);
  //   }
  // }, [statehotels.hotels, hotels]);

  useEffect(async () => {
    const { data } = await dispatch(findByUserId(user));
    const hotelList = data;
    console.log("I am hotels Data Sai wala ", data);
    setHotels(hotelList);
  }, []);

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
  const handleCreateHotel = (e) => {
    e.preventDefault();
    history.push("/create_hotel");
  };
  const handleDetailHotel = async (e, props) => {
    e.preventDefault();
    let id = props;
    await dispatch(getHotelByID(id));
    history.push(`/single_hotel/${props}`);
  };
  return (
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
            <h1>Hello {userEmail.split("@")[0]}!</h1>
            <p>Welcome to Your Dashboard Here Your can manage Hotels</p>
          </div>
        </div>
      </section>
      <main>
        <div className="margin_60 container">
          <h1 style={{ textAlign: "center" }}> Hotels</h1>
          {hotels?.length === 0 ? (
            <>
              <h1>There are not any Hotels In Database</h1>
              <Button
                type="submit"
                className="btn_1 green"
                onClick={(e) => handleCreateHotel(e)}
              >
                Create Hotel
              </Button>
            </>
          ) : (
            <>
              <HotelGrid
                hotels={hotels}
                handleDetailHotel={handleDetailHotel}
                handleDeleteHotel={handleDeleteHotel}
                handleUpdateHotel={handleUpdateHotel}
                role={role}
              />
              <Button
                type="submit"
                className="btn_1 green"
                onClick={(e) => handleCreateHotel(e)}
              >
                Create Hotel
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HotelManagerDashboard;
