import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/admin.css";
import { createTour, getTours } from "../../../redux/actions/tour.action";
import { createPlaces, getPlaces } from "../../../redux/actions/places.action";
import { MultiSelect } from "react-multi-select-component";
import { uploadImage } from "../../../redux/actions/upload.action";
import axios from "axios";
import PlaceSuggestions from "../Place/PlaceSuggestions";
import { Button } from "@material-ui/core";
const CreateTour = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("NaranKaghan");
  const [description, setDescription] = useState(
    "A Tour from Lahore to Naran Kaghan"
  );
  const role = useSelector((state) => state.auth.role);
  console.log("Role", role);

  const [startLocation, setStartLocation] = useState("Lahore");
  const [endLocation, setEndLocation] = useState("Naran Valley");
  const [price, setPrice] = useState(3000);
  const [startDate, setStartDate] = useState("7/29/2021");
  const [endDate, setEndDate] = useState("8/5/2021");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [status, setStatus] = useState("");
  const [tourType, setTourType] = useState("");
  const optionsData = [];
  const [images, setImages] = useState([]);
  const [lanLongStartlocation, setLanLongStartlocation] = useState("");
  const [lanLongEndlocation, setLanLongEndlocation] = useState("");
  const [distances, setDistances] = useState(0);
  const [durations, setDurations] = useState(0);

  // useEffect(() => {
  //   findlatlngLocations();
  // }, [startLocation, endLocation]);

  const handlePlaceCreateSubmit = (e, name, description, images) => {
    e.preventDefault();
    console.log(name, description, images);
    if (name && description && images) {
      dispatch(createPlaces(name, description, [images]));
    } else {
      if (!name) {
        dispatch(createPlaces("", description, [images]));
      } else if (!description) {
        dispatch(createPlaces(name, "description", [images]));
      }
    }
  };

  const statePlaces = useSelector((state) => state.places);

  useEffect(async () => {
    if (statePlaces.places.length === 0) {
      const { data } = await dispatch(getPlaces());
      setPlaces(data);
      data?.map((place) => {
        optionsData.push({
          label: place.name,
          value: place.name,
          _id: place._id,
          name: place.name,
          description: place.description,
          images: place.images,
          createdAt: place.createdAt,
          updatedAt: place.updatedAt,
        });
        setOptions(optionsData);
      });
    } else {
      const { places } = statePlaces;
      setPlaces(places);
      places?.map((place) => {
        optionsData.push({
          label: place.name,
          value: place.name,
          _id: place._id,
          name: place.name,
          description: place.description,
          images: place.images,
          createdAt: place.createdAt,
          updatedAt: place.updatedAt,
        });
      });
    }
  }, [statePlaces.place, selectedOptions]);

  const findlatlngLocations = async (startLocation, endLocation) => {
    try {
      console.log(startLocation, endLocation);

      const {
        data: { results },
      } = await axios.get(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${startLocation}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
      console.log(results);
      setLanLongStartlocation(results[0].geometry?.location);

      const data2 = await axios.get(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${endLocation}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
      console.log(data2);
      setLanLongEndlocation(data2?.data?.results[0]?.geometry?.location);

      console.log(
        results[0].geometry?.location,
        data2?.data?.results[0]?.geometry?.location
      );
      const distancedata = await axios.get(
        `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix`,
        {
          params: {
            origins: `${results[0].geometry?.location.lat},${results[0].geometry?.location.lng}`,
            destinations: `${data2?.data?.results[0]?.geometry?.location.lat},${data2?.data?.results[0]?.geometry?.location.lng}`,
          },
          headers: {
            "x-rapidapi-host": "trueway-matrix.p.rapidapi.com",
            "x-rapidapi-key":
              "0f2d353845mshbcc6321a9e9eca1p17f084jsnad0808357c3b",
          },
        }
      );
      console.log("I am duration cal", distancedata?.data?.durations[0]);
      console.log("I am Distance cal", distancedata?.data?.distances[0]);
      setDistances(distancedata?.data?.distances[0] / 1000);
      setDurations(distancedata?.data?.durations[0]);
      console.log(
        "I am Distance from State",
        distancedata?.data?.distances[0] / 1000
      );
      const calculatedprice = (distancedata?.data?.distances[0] / 100) * 145;
      console.log("I am Calculated", calculatedprice);
      setPrice(calculatedprice);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const places = selectedOptions;
    console.log("I amImages Data before Dispatch", images);
    if (role === "user") {
      await dispatch(
        createTour(
          name,
          description,
          "self",
          startLocation,
          endLocation,
          Number(price),
          startDate,
          endDate,
          "initialized",
          places,
          images
        )
      );
    } else {
      await dispatch(
        createTour(
          name,
          description,
          "withtravistravels",
          startLocation,
          endLocation,
          Number(price),
          startDate,
          endDate,
          "initialized",
          places,
          images
        )
      );
    }

    await dispatch(getTours());
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
            <h1>Hello Clara!</h1>
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
        <div className="margin_60 container">
          <div>
            <div className="content1">
              <section id="section-4">
                {/* End row */}
                <div className="divider" />
                <div className="row">
                  <div className="col-md-12">
                    <h4>Create Tour</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Name</label>
                      <input
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        type="text"
                        required
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
                  {role === "admin" && (
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Tour Type</label>
                        <select
                          id="tourType"
                          className="form-control"
                          name="tourType"
                          defaultValue="Company"
                          name={tourType}
                          onChange={(e) => setTourType(e.target.value)}
                        >
                          <option value>Company</option>
                          <option value>User</option>
                        </select>
                      </div>
                    </div>
                  )}

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
                  <Button
                    className="btn_1 green"
                    onClick={() =>
                      findlatlngLocations(startLocation, endLocation)
                    }
                  >
                    Calculate Price{" "}
                  </Button>
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

                  {/* {role === "admin" && (
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Tour Type</label>
                        <select
                          id="tourType"
                          className="form-control"
                          name="tourType"
                          defaultValue="Company"
                          name={status}
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
                  )} */}

                  <div className="col-sm-6">
                    <label>Places</label>
                    <MultiSelect
                      options={options}
                      value={selectedOptions}
                      onChange={setSelectedOptions}
                      labelledBy="Select"
                    />
                  </div>

                  {role != "user" && (
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
                  )}
                </div>
                {/* End row */}
                <hr />
                <PlaceSuggestions
                  lanLongStartlocation={lanLongStartlocation}
                  lanLongEndlocation={lanLongEndlocation}
                  handlePlaceCreateSubmit={handlePlaceCreateSubmit}
                />
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={handleSubmit}
                >
                  Create Tour
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

export default CreateTour;
