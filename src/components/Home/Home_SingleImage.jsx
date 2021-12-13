import React, { useState, useEffect } from "react";
import { deleteTour, getTours } from "../../redux/actions/tour.action";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteHotel,
  getAllHotels,
  getHotelByID,
  updateHotel,
} from "../../redux/actions/hotels.action";
import { Button, Link } from "@material-ui/core";
import TourGrid from "../Tours/All Tours/TourGrid";
import { handleDetailTour } from "../Tours/All Tours/all_tours_grid";
import HotelGrid from "../Hotel/All_Hotels/HotelGrid";
import { LinkedCameraOutlined } from "@material-ui/icons";
const Home_SingleImage = ({ history }) => {
  const dispatch = useDispatch();
  const [tours, setTours] = useState([]);
  const [sliceHotel, setSliceHotel] = useState();
  const [sliceTour, setSliceTour] = useState();
  const [hotels, setHotels] = useState();
  const role = useSelector((state) => state.auth.role);
  const statehotels = useSelector((state) => state.hotels);
  const statetours = useSelector((state) => state.tours);

  const handleDetailTour = async (e, id) => {
    e.preventDefault();
    history.push(`/single_tour/${id}`);
  };
  const handleDeleteTour = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteTour(id));
    await dispatch(getTours());
  };
  const handleUpdateTour = async (e, id) => {
    e.preventDefault();
    history.push(`/update_tour/${id}`);
    await dispatch(getTours());
  };
  useEffect(async () => {
    if (statehotels.hotels.length === 0) {
      const data = await dispatch(getAllHotels());
      const response = data.data;
      setHotels(response);
      const hotelSlice = response?.slice(0, 6);
      setSliceHotel(hotelSlice);
    } else {
      setHotels(statehotels.hotels);
      const stateHotelSlice = statehotels.hotels?.slice(0, 6);
      setSliceHotel(stateHotelSlice);
    }
  }, [statehotels.hotels, hotels]);

  useEffect(async () => {
    if (statetours.tours.length === 0) {
      const { data } = await dispatch(getTours());
      setTours(data);
      console.log("data", data);
      const tourSlice = data?.slice(0, 6);
      setSliceTour(tourSlice);
    } else {
      setTours(statetours.tours);
      const stateSliceTour = statetours.tours?.slice(0, 6);
      setSliceTour(stateSliceTour);
    }
  }, [statetours.tours, tours]);

  const handleToursPush = (e) => {
    e.preventDefault();

    history.push("/all_tours_list");
  };

  const handleHotelPush = (e) => {
    e.preventDefault();

    history.push("/all_hotels_list");
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

  return (
    <>
      <section id="hero">
        <div class="intro_title">
          <h3 class="animated fadeInDown">Affordable Pakistan tours</h3>
          <p class="animated fadeInDown">
            Tours / Restaurants / Hotels / Transport
          </p>
          <Link to="/all_tours_list" class="animated fadeInUp button_intro">
            View Tours
          </Link>
          <Link
            to="/all_hotels_list"
            class="animated fadeInUp button_intro outline"
            style={{ marginLeft: "10px" }}
          >
            View Hotels
          </Link>
        </div>
      </section>
      <main>
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Pakistan <span>Top</span> Tours
            </h2>
            <p>Get Top paksitan Tours in Aforadable Prices</p>
          </div>
          {tours?.length === 0 ? (
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              No Tours To Show
            </h3>
          ) : (
            <div>
              <TourGrid
                tours={sliceTour}
                handleDeleteTour={handleDeleteTour}
                handleDetailTour={handleDetailTour}
                handleUpdateTour={handleUpdateTour}
                role={role}
                isHome={true}
              />
            </div>
          )}

          {/* End row */}
          <p className="text-center add_bottom_30">
            <Button
              className="btn_1 medium"
              onClick={handleToursPush}
              style={{ backgroundColor: "green", color: "white" }}
            >
              <i className="icon-eye-7" />
              View all tours ({tours?.length}){" "}
            </Button>
          </p>
          <hr />
          <div className="main_title">
            <h2>
              Pakistan <span>Top</span> Hotels
            </h2>
            <p>Get Affordable Hotels In Pakistan in Aforadable Prices</p>
          </div>
          {hotels?.length === 0 ? (
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              No Hotels To Show
            </h3>
          ) : (
            <div className="row">
              <HotelGrid
                hotels={sliceHotel}
                handleDeleteHotel={handleDeleteHotel}
                handleDetailHotel={handleDetailHotel}
                handleUpdateHotel={handleUpdateHotel}
                role={role}
                isHome={true}
              />
            </div>
          )}

          {/* End row */}

          <p className="text-center nopadding">
            <Button
              className="btn_1 medium"
              onClick={handleHotelPush}
              style={{ backgroundColor: "green", color: "white" }}
            >
              <i className="icon-eye-7" />
              View all hotels ({hotels?.length}){" "}
            </Button>
          </p>
        </div>
        {/* End container */}

        {/* End white_bg */}
        <section className="promo_full">
          <div className="promo_full_wp magnific">
            <div>
              <h3>BELONG ANYWHERE</h3>
              <p>
                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                doctus volumus explicari qui ex.
              </p>
              <a
                href="https://www.youtube.com/watch?v=Zz5cu72Gv5Y"
                className="video"
              >
                <i className="icon-play-circled2-1" />
              </a>
            </div>
          </div>
        </section>
        {/* End section */}
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Some <span>good</span> reasons
            </h2>
            <p>
              Quisque at tortor a libero posuere laoreet vitae sed arcu.
              Curabitur consequat.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.2s">
              <div className="feature_home">
                <i className="icon_set_1_icon-41" />
                <h3>
                  <span>+120</span> Premium tours
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </p>
                <a href="about.html" className="btn_1 outline">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.4s">
              <div className="feature_home">
                <i className="icon_set_1_icon-30" />
                <h3>
                  <span>+1000</span> Customers
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </p>
                <a href="about.html" className="btn_1 outline">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="feature_home">
                <i className="icon_set_1_icon-57" />
                <h3>
                  <span>H24 </span> Support
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </p>
                <a href="about.html" className="btn_1 outline">
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/*End row */}
        </div>
        {/* End container */}
      </main>

      {/* End main */}

      <div id="toTop" />
      {/* Back to top button */}
      {/* Search Menu */}
      <div className="search-overlay-menu">
        <span className="search-overlay-close">
          <i className="icon_set_1_icon-77" />
        </span>
        <form role="search" id="searchform" method="get">
          <input defaultValue name="q" type="search" placeholder="Search..." />
          <button type="submit">
            <i className="icon_set_1_icon-78" />
          </button>
        </form>
      </div>
      {/* End Search Menu */}
      {/* Sign In Popup */}
      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="small-dialog-header">
          <h3>Sign In</h3>
        </div>
        <form>
          <div className="sign-in-wrapper">
            <a href="#0" className="social_bt facebook">
              Login with Facebook
            </a>
            <a href="#0" className="social_bt google">
              Login with Google
            </a>
            <div className="divider">
              <span>Or</span>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                defaultValue
              />
              <i className="icon_lock_alt" />
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-left">
                <input id="remember-me" type="checkbox" name="check" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="float-right">
                <a id="forgot" href="">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="text-center">
              <input
                type="submit"
                defaultValue="Log In"
                className="btn_login"
              />
            </div>
            <div className="text-center">
              Don’t have an account? <a href="">Sign up</a>
            </div>
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input
                  type="email"
                  className="form-control"
                  name="email_forgot"
                  id="email_forgot"
                />
                <i className="icon_mail_alt" />
              </div>
              <p>
                You will receive an email containing a link allowing you to
                reset your password to a new preferred one.
              </p>
              <div className="text-center">
                <input
                  type="submit"
                  defaultValue="Reset Password"
                  className="btn_1"
                />
              </div>
            </div>
          </div>
        </form>
        {/*form */}
      </div>
    </>
  );
};

export default Home_SingleImage;
