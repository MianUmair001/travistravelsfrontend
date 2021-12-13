import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/admin.css";
import { createTour, getTours } from "../../../redux/actions/tour.action";
import { createPlaces, getPlaces } from "../../../redux/actions/places.action";
import { MultiSelect } from "react-multi-select-component";
import { uploadImage } from "../../../redux/actions/upload.action";
import axios from "axios";
import PlaceSuggestions from "../Place/PlaceSuggestions";
import { Button, Grid, List } from "@material-ui/core";
import { PlacesAutocomplete } from "./PlacesAutoComplete";
import DatePicker from "react-date-picker";
import { getPlacesData } from "../api";
import ScrollView from "./ScrollView";
import directions from "google-maps-direction";

const CreateTour = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("NaranKaghan");
  const [description, setDescription] = useState(
    "A Tour from Lahore to Naran Kaghan"
  );
  const role = useSelector((state) => state.auth.role);
  const userName = useSelector((state) => state.auth.userEmail);
  console.log("Role", role);

  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [price, setPrice] = useState(3000);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [status, setStatus] = useState("initialized");
  const [tourType, setTourType] = useState("");
  const optionsData = [];
  const [images, setImages] = useState([]);
  const [lanLongStartlocation, setLanLongStartlocation] = useState("");
  const [lanLongEndlocation, setLanLongEndlocation] = useState("");
  const [distances, setDistances] = useState(0);
  const [durations, setDurations] = useState(0);
  const [startLocationCoords, setStartLocationCoords] = useState({});
  const [endLocationCoords, setEndLocationCoords] = useState({});
  const [startLocationBounds, setStartLocationBounds] = useState();
  const [endLocationBounds, setEndLocationBounds] = useState();
  const [attractionsData, setAttractionsData] = useState([]);
  const [selectedAttraction, setselectedAttraction] = useState([]);
  const [boundsArray, setBoundsArray] = useState([]);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   findlatlngLocations();
  // }, [startLocation, endLocation]);

  const handlePlaceCreateSubmit = (e, name, description, images) => {
    e.preventDefault();
    console.log(name, description, images);
    if (name && description && images) {
      dispatch(createPlaces(name, description, [images]));
      dispatch(getPlaces());
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

  const calculatePrice = async (startLocation, endLocation) => {
    try {
      console.log(startLocation, endLocation);
      console.log(startLocationCoords, endLocationCoords);
      const {
        data: { results },
      } = await axios.get(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${startLocation}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
      console.log(results);
      setLanLongStartlocation(results[0].geometry);
      setStartLocationBounds(results[0].geometry.bounds);
      console.log("StartLocation Bounds", results[0].geometry.bounds);
      const data2 = await axios.get(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${endLocation}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
      console.log(data2);
      setLanLongEndlocation(data2?.data?.results[0]?.geometry?.location);
      const startBounds = results[0].geometry.bounds;
      const endBounds = data2?.data?.results[0]?.geometry?.bounds;
      setEndLocationBounds(data2?.data?.results[0]?.geometry?.bounds);
      console.log(
        "EndLocation Bounds",
        data2?.data?.results[0]?.geometry?.bounds
      );

      console.log(
        results[0].geometry?.location,
        data2?.data?.results[0]?.geometry?.location
      );

      const distancedata = await axios.get(
        `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix`,
        {
          params: {
            origins: `${startLocationCoords.lat},${startLocationCoords.lng}`,
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
      const NoofDays = Math.ceil(
        (new Date(endDate).getTime() - new Date(startDate).getTime()) /
          (1000 * 3600 * 24)
      );
      setDistances(distancedata?.data?.distances[0] / 1000);
      setDurations(distancedata?.data?.durations[0]);
      console.log(
        "I am Distance from State",
        distancedata?.data?.distances[0] / 1000
      );
      const DistanceKm = distancedata?.data?.distances[0] / 1000;
      console.log(DistanceKm);
      const calculatedprice = (DistanceKm / 14) * 145 * 2;
      const foodPrice = NoofDays * 2975;
      const entertainmentPrice = NoofDays * 1242;
      const accommodationPrice = NoofDays * 5309;
      console.log("Cost on Food is ", foodPrice);
      console.log("Cost on Entertainment is ", entertainmentPrice);
      console.log("Cost on Accommodation is ", accommodationPrice);
      console.log("I am Calculated", calculatedprice);
      setPrice(
        parseInt(
          calculatedprice + foodPrice + entertainmentPrice + accommodationPrice
        )
      );
      console.log("We are Bounds", startBounds, endBounds);
      // const attractions = await getPlacesData(
      //   "attractions",
      //   startBounds.southwest,
      //   endBounds.northeast
      // );
      // console.log(attractions);
      // setAttractionsData(attractions);
      getDirections();
    } catch (error) {
      console.log({ error });
    }
  };
  const getAttractions = async () => {
    // e.preventDefault();
    try {
      let totalAttractions = [];
      for (let counter = 0; counter < boundsArray.length; counter++) {
        totalAttractions.push(
          await getPlacesData(
            "attractions",
            boundsArray[counter].sw,
            boundsArray[counter].ne
          )
        );
      }
      return totalAttractions;
    } catch (error) {
      console.log({ error });
    }
  };
  const check = async () => {
    const saiData = await getAttractions();
    console.log("I am Sai Data", saiData);
    var merged = [].concat.apply([], saiData);
    console.log("MergedDta ", merged);
    setAttractionsData(merged);
  };

  const getDirections = async () => {
    console.log(startLocationCoords, endLocationCoords);

    var options = {
      method: "GET",
      url: "https://trueway-directions2.p.rapidapi.com/FindDrivingPath",
      params: {
        origin: `${startLocationCoords.lat},${startLocationCoords.lng}`,
        destination: `${endLocationCoords.lat},${endLocationCoords.lng}`,
      },
      headers: {
        "x-rapidapi-host": "trueway-directions2.p.rapidapi.com",
        "x-rapidapi-key": "0f2d353845mshbcc6321a9e9eca1p17f084jsnad0808357c3b",
      },
    };

    const { data } = await axios.request(options);
    console.log("I am Directions Data", data.route.steps);
    const dataArray = [];
    data.route.steps.map((routeOne) =>
      dataArray.push({
        sw: { lat: routeOne.bounds.south, lng: routeOne.bounds.west },
        ne: { lat: routeOne.bounds.north, lng: routeOne.bounds.east },
      })
    );
    console.log(dataArray);
    setBoundsArray(dataArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const places = selectedOptions;
    console.log("I amImages Data before Dispatch", images);
    console.log(typeof startDate.toString());
    const stringStartDate = startDate.toString().split("00")[0];
    console.log(typeof endDate.toString());
    const stringEndDate = endDate.toString().split("00")[0];
    console.log(stringStartDate, stringEndDate);

    if (role === "user") {
      await dispatch(
        createTour(
          name,
          description,
          "self",
          startLocation,
          endLocation,
          Number(price),
          stringStartDate,
          stringEndDate,
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
          stringStartDate,
          stringEndDate,
          status,
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
            <h1>Hello {userName.split("@")[0]}</h1>
            <p>
              Here You can Create your
              {role === "admin" ? " Public and Private Tour" : " Public Tour"}
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
                      <PlacesAutocomplete
                        startLocation={true}
                        setStartLocation={setStartLocation}
                        setstartLocationCoords={setStartLocationCoords}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Location</label>
                      <PlacesAutocomplete
                        startLocation={false}
                        setEndLocation={setEndLocation}
                        setEndLocationCoords={setEndLocationCoords}
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

                      <DatePicker
                        className="form-control"
                        value={startDate}
                        onChange={setStartDate}
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>endDate</label>
                      <DatePicker
                        className="form-control"
                        value={endDate}
                        onChange={setEndDate}
                        minDate={new Date()}
                      />
                    </div>
                  </div>

                  {role === "admin" && (
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Tour Status</label>
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
                  )}

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
                <Button
                  className="btn_1 green"
                  onClick={() => calculatePrice(startLocation, endLocation)}
                >
                  Calculate Price{" "}
                </Button>
                <hr />

                <Button className="btn_1 green" onClick={(e) => check(e)}>
                  Get Attractions
                </Button>

                <hr />
                {console.log(attractionsData)}
                {attractionsData?.length > 0 && (
                  <ScrollView attractionsData={attractionsData} />
                )}

                <hr />
                <PlaceSuggestions
                  lanLongStartlocation={lanLongStartlocation}
                  lanLongEndlocation={lanLongEndlocation}
                  handlePlaceCreateSubmit={handlePlaceCreateSubmit}
                />

                <br />
                <br />
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
