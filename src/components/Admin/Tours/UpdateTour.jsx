import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/admin.css";
import {
  createTour,
  getTour,
  getTours,
  updateTour,
} from "../../../redux/actions/tour.action";
import { getPlaces } from "../../../redux/actions/places.action";
import { MultiSelect } from "react-multi-select-component";
import { useParams } from "react-router";
import { uploadImage } from "../../../redux/actions/upload.action";

const UpdateTour = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("NaranKaghan");
  const data = useParams();
  const [description, setDescription] = useState(
    "A Tour from Lahore to Naran Kaghan"
  );
  const [startLocation, setStartLocation] = useState("Lahore");
  const [endLocation, setEndLocation] = useState("NaranKaghan");
  const [price, setPrice] = useState("3000");
  const [startDate, setStartDate] = useState("7/29/2021");
  const [endDate, setEndDate] = useState("8/5/2021");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState();
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [status, setStatus] = useState("");
  const [tourType, setTourType] = useState("");
  const [images, setImages] = useState();
  const optionsData = [];
  const userEmail = useSelector((state) => state.auth.userEmail);

  useEffect(async () => {
    console.log("Id from the useparams", data.id);
    const {
      data: {
        name,
        description,
        tourType,
        startLocation,
        endLocation,
        price,
        startDate,
        endDate,
        status,
        places,
        images,
      },
    } = await dispatch(getTour(data.id));
    console.log("I am in the updateTour's Use effect", places);
    setName(name);
    setDescription(description);
    setTourType(tourType);
    setStartLocation(startLocation);
    setEndLocation(endLocation);
    setPrice(price);
    setStartDate(startDate);
    setEndDate(endDate);
    setStatus(status);
    setPlaces(places);

    const newPlaces = [];
    newPlaces.push(
      places.map((place) => {
        return {
          value: place.name,
          label: place.name,
          ...place,
        };
      })
    );
    console.log("I am New Places Record", newPlaces[0]);

    setSelectedOptions(newPlaces[0]);
  }, []);

  useEffect(async () => {
    const { data } = await dispatch(getPlaces());
    setPlaces(data);
    data?.map((place) => {
      optionsData.push({
        label: place.name,
        value: place.name,
        // _id: place._id,
        name: place.name,
        description: place.description,
        images: place.images,
        createdAt: place.createdAt,
        updatedAt: place.updatedAt,
      });
    });
    setOptions(optionsData);
  }, [selectedOptions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const places = selectedOptions;
    console.log("I am in handle submit of Update Tour", places);
    dispatch(
      updateTour(data.id, {
        name,
        description,
        tourType,
        startLocation,
        endLocation,
        price: Number(price),
        startDate,
        endDate,
        status,
        places,
        images,
      })
    );
    dispatch(getTours());
  };

  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/admin_top.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Hello {userEmail?.split("@")[0]}!</h1>
            <p>
              Top Pakistan hotels,Tours,Restaurant,Transports with great offers
              and cheap prices.
            </p>
          </div>
        </div>
      </section>
      {/* End section */}
      <main>
        {/* End Position */}
        <div className="margin_60 container">
          <div>
            <div className="content1">
              <section id="section-4">
                {/* End row */}
                <div className="divider" />
                <div className="row">
                  <div className="col-md-12">
                    <h4>Update Tour</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Name</label>
                      <input
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        className="form-control"
                        name="description"
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Type</label>
                      <select
                        id="tourType"
                        className="form-control"
                        name="tourType"
                        // defaultValue="Company"
                        value={tourType}
                        onChange={(e) => setTourType(e.target.value)}
                      >
                        <option value="company">Company</option>
                        <option value="User">User</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Location</label>
                      <input
                        className="form-control"
                        name="startLocation"
                        id="startLocation"
                        type="text"
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Location</label>
                      <input
                        className="form-control"
                        name="endLocation"
                        id="endLocation"
                        type="text"
                        value={endLocation}
                        onChange={(e) => setEndLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        className="form-control"
                        name="price"
                        id="price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>StartDate</label>
                      <input
                        className="form-control"
                        name="startDate"
                        id="startDate"
                        type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>endDate</label>
                      <input
                        className="form-control"
                        name="endDate"
                        id="endDate"
                        type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Type</label>
                      <select
                        id="tourType"
                        className="form-control"
                        name="tourType"
                        // defaultValue="initialized"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="initialized">Initialized</option>
                        <option value="inprocess">Inprocess</option>
                        <option value="started">Started</option>
                        <option value="onjourney">Onjourney</option>
                        <option value="ended">Ended</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label>Places</label>
                    <MultiSelect
                      options={options}
                      value={selectedOptions}
                      onChange={setSelectedOptions}
                      labelledBy="Select"
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Images</label>
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
                </div>
                {/* End row */}
                <hr />
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={handleSubmit}
                >
                  Update Tour
                </button>
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
    </>
  );
};

export default UpdateTour;
