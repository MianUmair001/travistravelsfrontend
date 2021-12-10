import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteTransportByID,
  getALlTransport,
  getTransportByid,
  updateTransport,
} from "../../../../redux/actions/transport.action";
import { getImage } from "../../../../redux/actions/upload.action";
import BookingForm from "../../../Restaurants/Booking/BookingForm";

const Single_transfer = ({ history }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "I am Params");
  const [name, setName] = useState("");
  const [modelName, setModelName] = useState("");
  const [description, setDescription] = useState("");
  const [transportType, setTransportType] = useState("");
  const [numberofSeats, setNumberofSeats] = useState(0);
  const [pricePerKillomter, setPricePerKillomter] = useState(0);
  const [airConditioner, setAirConditioner] = useState();
  const [availability, setavailability] = useState(0);
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState();

  useEffect(async () => {
    const { data } = await dispatch(getTransportByid(id));
    console.log(data, "I am TRansport");
    if (data?.images) {
      const link = await dispatch(
        getImage(data?.images[0]?.name, data?.images[0]?.folderName)
      );
      console.log(link);
      setUrl(link);
    } else {
      setUrl(null);
    }
    setName(data.name);
    setModelName(data.modelName);
    setDescription(data.description);
    setTransportType(data.transportType);
    setNumberofSeats(data.numberofSeats);
    setPricePerKillomter(data.pricePerKillomter);
    setAirConditioner(data.airConditioner);
    setavailability(data.availability);
    setImages(data.images);
  }, []);

  const updateTransportHandler = async (e) => {
    e.preventDefault();

    await dispatch(
      updateTransport(
        id,
        name,
        modelName,
        description,
        transportType,
        numberofSeats,
        pricePerKillomter,
        airConditioner,
        availability,
        images
      )
    );

    history.push(`/update_transport/${id}`);
  };

  const deleteTransportHandler = async (e) => {
    e.preventDefault();

    await dispatch(deleteTransportByID(id));
    history.push("/all_transfer_list");
  };

  const handleViewAllTransport = (e) => {
    e.preventDefault();

    history.push("/all_transfer_list");
  };

  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src={url === null && "img/transfer_top.jpg"}
          style={{ backgroundImage: `url(${url})` }}
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-2">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1>{name}</h1>
                  <span>{description.split(".")[0]}</span>
                </div>
                <div className="col-md-4">
                  <div id="price_single_main">
                    price per killometer
                    <span style={{ fontSize: "25px" }}>
                      PKR:
                      {pricePerKillomter}
                    </span>
                  </div>
                </div>
              </div>
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
          {/* End Position */}
          <div className="collapse" id="collapseMap">
            <div id="map" className="map" />
          </div>
          {/* End Map */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8" id="single_tour_desc">
                <p className="d-none d-md-block d-block d-lg-none">
                  <Button
                    className="btn_map mb-2"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={updateTransportHandler}
                  >
                    Update Transport
                  </Button>
                  <Button
                    className="btn_map mb-2"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={deleteTransportHandler}
                  >
                    delete transport
                  </Button>
                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleViewAllTransport}
                  >
                    view all transport
                  </Button>
                </p>
                {/* Map button for tablets/mobiles */}
                <div className="row">
                  <div className="col-lg-3">
                    <h3>Description</h3>
                  </div>
                  <div className="col-lg-9">
                    <p>{description}</p>
                    <h4>What's include</h4>
                    <p>
                      Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo
                      aeterno legimus insolens ad. Sit cu detraxit constituam,
                      an mel iudico constituto efficiendi.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list_ok">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>No scripta electram necessitatibus sit</li>
                          <li>Quidam percipitur instructior an eum</li>
                          <li>Ut est saepe munere ceteros</li>
                          <li>No scripta electram necessitatibus sit</li>
                          <li>Quidam percipitur instructior an eum</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list_ok">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>No scripta electram necessitatibus sit</li>
                          <li>Quidam percipitur instructior an eum</li>
                          <li>No scripta electram necessitatibus sit</li>
                        </ul>
                      </div>
                    </div>
                    {/* End row  */}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-3">
                    <h3>Reviews </h3>
                    <a
                      href="#"
                      className="btn_1 add_bottom_30"
                      data-toggle="modal"
                      data-target="#myReview"
                    >
                      Leave a review
                    </a>
                  </div>
                  <div className="col-lg-9">
                    <div id="general_rating">
                      11 Reviews
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End general_rating */}
                    <div className="row" id="rating_summary">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Comfort
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </div>
                          </li>
                          <li>
                            Punctuality
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Price
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </div>
                          </li>
                          <li>
                            Kindness
                            <div className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End row */}
                    <hr />
                    <div className="review_strip_single">
                      <img
                        src="img/avatar1.jpg"
                        alt="Image"
                        className="rounded-circle"
                      />
                      <small> - 10 March 2015 -</small>
                      <h4>Jhon Doe</h4>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed a lorem quis neque interdum consequat ut sed
                        sem. Duis quis tempor nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus."
                      </p>
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End review strip */}
                    <div className="review_strip_single">
                      <img
                        src="img/avatar3.jpg"
                        alt="Image"
                        className="rounded-circle"
                      />
                      <small> - 10 March 2015 -</small>
                      <h4>Jhon Doe</h4>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed a lorem quis neque interdum consequat ut sed
                        sem. Duis quis tempor nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus."
                      </p>
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End review strip */}
                    <div className="review_strip_single last">
                      <img
                        src="img/avatar2.jpg"
                        alt="Image"
                        className="rounded-circle"
                      />
                      <small> - 10 March 2015 -</small>
                      <h4>Jhon Doe</h4>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed a lorem quis neque interdum consequat ut sed
                        sem. Duis quis tempor nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus."
                      </p>
                      <div className="rating">
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile voted" />
                        <i className="icon-smile" />
                        <i className="icon-smile" />
                      </div>
                    </div>
                    {/* End review strip */}
                  </div>
                </div>
              </div>
              {/*End  single_tour_desc*/}
              <aside className="col-lg-4">
                <p className="d-none d-xl-block d-lg-block d-xl-none">
                  <Button
                    className="btn_map mb-2"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={updateTransportHandler}
                  >
                    update transport
                  </Button>

                  <Button
                    className="btn_map mb-2"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={deleteTransportHandler}
                  >
                    delete transport
                  </Button>

                  <Button
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                    onClick={handleViewAllTransport}
                  >
                    view all transport
                  </Button>
                </p>

                <BookingForm
                  serviceName={name}
                  bookedServiceId={id}
                  bookedServiceType={"Transport"}
                  price={pricePerKillomter}
                  
                />
                {/*/box_style_1 */}
                <div className="box_style_4">
                  <i className="icon_set_1_icon-90" />
                  <h4>
                    <span>Book</span> by phone
                  </h4>
                  <a href="tel://03244220705" className="phone">
                    03244220705
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </aside>
            </div>
            {/*End row */}
          </div>
          {/*End container */}
          <div id="overlay" />
          {/* Mask on input focus */}
        </main>
        {/* End main */}
      </div>
    </>
  );
};
export default Single_transfer;
