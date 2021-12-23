import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPlacesData, getWeatherData } from "../api";
import Map from "./Map/Map";
import List from "./List/List";

const PlaceSuggestions = ({
  lanLongStartlocation,
  lanLongEndlocation,
  handlePlaceCreateSubmit,
}) => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState();
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const [images, setImages] = useState();
  useEffect(async () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <div>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            setName={setName}
            setDescription={setDescription}
            setImages={setImages}
            handlePlaceCreateSubmit={handlePlaceCreateSubmit}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            // google={this.props.google}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
            lanLongStartlocation={lanLongStartlocation}
            lanLongEndlocation={lanLongEndlocation}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceSuggestions;
