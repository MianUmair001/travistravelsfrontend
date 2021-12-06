import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Commute } from "@material-ui/icons";

import { updateTransport } from "../../../../redux/actions/transport.action";
import { uploadImage } from "../../../../redux/actions/upload.action";

const UpdateTransport = ({ history }) => {
  const dispatch = useDispatch();

  const {
    transportID,
    transportName,
    modelName,
    transportType,
    description,
    pricePerKillomter,
    numberOfSeats,
    airConditioner,
    availability,
    images,
  } = useSelector((state) => state.transport);

  const [name, setName] = useState(transportName);
  const [modelName_, setModelName] = useState(modelName);
  const [transportType_, setTransportType] = useState(transportType);
  const [numberOfSeats_, setNumberOfSeats] = useState(numberOfSeats);
  const [pricePerKillomter_, setPricePerKillomter] =
    useState(pricePerKillomter);
  const [airConditioner_, setAirConditioner] = useState(airConditioner);
  const [availability_, setAvailability] = useState(availability);
  const [description_, setDescription] = useState(description);
  const [images_, setImages] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const updateTransportHandler = async (e) => {
    e.preventDefault();

    const response = await dispatch(
      updateTransport(
        transportID,
        name,
        modelName_,
        description_,
        transportType_,
        numberOfSeats_,
        pricePerKillomter_,
        airConditioner_,
        availability_,
        images_
      )
    );
    if (response !== undefined) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      return () => clearTimeout();
    }
  };

  const hotelID = useSelector((state) => state.hotel.hotelID);

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
                <li>Create Transport</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="margin_60 container">
            <div>
              <div className="content1">
                <section>
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Update Transport</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Transport Name</label>
                        <input
                          className="form-control"
                          name="Transport"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Model Name</label>
                        <input
                          className="form-control"
                          name="modelName"
                          type="text"
                          value={modelName_}
                          onChange={(e) => setModelName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Transport Type</label>
                        <input
                          className="form-control"
                          name="transportType"
                          type="text"
                          value={transportType_}
                          onChange={(e) => setTransportType(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Price Per Killomter</label>
                        <input
                          className="form-control"
                          name="pricePerKillomter"
                          type="number"
                          value={pricePerKillomter_}
                          onChange={(e) => setPricePerKillomter(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Number Of Seats</label>
                        <input
                          className="form-control"
                          name="numberOfSeats"
                          type="number"
                          value={numberOfSeats_}
                          onChange={(e) => setNumberOfSeats(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Air Conditioner</label>
                        <input
                          className="form-control"
                          name="airConditioner"
                          type="boolean"
                          value={airConditioner_}
                          onChange={(e) => setAirConditioner(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Availability</label>
                        <input
                          className="form-control"
                          name="availability"
                          type="boolean"
                          value={availability_}
                          onChange={(e) => setAvailability(e.target.value)}
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
                    onClick={updateTransportHandler}
                    startIcon={<Commute />}
                  >
                    Update Transport
                  </Button>
                  {showSuccessMessage ? (
                    <h6 className="mt-3">
                      Transport updated successfully!
                      <Link
                        to={`/single_transfer/${transportID}`}
                        style={{ marginLeft: "3px", color: "green" }}
                      >
                        View Transport
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

export default UpdateTransport;
