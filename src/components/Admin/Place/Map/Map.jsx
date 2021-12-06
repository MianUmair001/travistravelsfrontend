import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import mapStyles from "./mapStyles";
const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
  lanLongStartlocation,
  lanLongEndlocation,
}) => {
  var myLatLng = { lat: 38.346, lng: -0.4907 };

  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [directions, setDirections] = useState();
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionRenderer] = useState();
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();
  const handleApiLoaded = (map, maps) => {
    console.log("map", map, "maps", maps);
    setDirectionsService(maps.DirectionsService());
    setDirectionRenderer(maps.DirectionsRenderer());
    console.log("directionsService", directionsService);
    console.log("directionsDisplay", directionsRenderer);
    directionsRenderer.setMap(map);
    RouteCalculate(maps);
  };
  const RouteCalculate = (maps) => {
    var request = {
      origin: "Chicago, IL",
      destination: "Los Angeles, CA",
      waypoints: [
        {
          location: "Joplin, MO",
          stopover: false,
        },
        {
          location: "Oklahoma City, OK",
          stopover: true,
        },
      ],
      provideRouteAlternatives: false,
      travelMode: "DRIVING",
      drivingOptions: {
        departureTime: new Date(/* now, or future date */),
        trafficModel: "pessimistic",
      },
      unitSystem: maps.UnitSystem.IMPERIAL,
    };
    directionsService.route(request, function (result, status) {
      if (status == maps.DirectionsStatus.OK) {
        console.log("I am Results", result);
        directionsRenderer.setDirections(result);
      } else {
        directionsRenderer.setDirections({ routes: [] });
        map.setCenter(myLatLng);
      }
    });
  };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw:e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        <div
          className={classes.markerContainer}
          lat={lanLongStartlocation.lat}
          lng={lanLongStartlocation.lng}
        >
          <Paper elevation={3} className={classes.paper}>
            <Typography
              className={classes.typography}
              variant="subtitle2"
              gutterBottom
            >
              {/* {place.name} */}
              Start Location
            </Typography>
          </Paper>
        </div>

        <div
          className={classes.markerContainer}
          lat={lanLongEndlocation.lat}
          lng={lanLongEndlocation.lng}
        >
          <Paper elevation={3} className={classes.paper}>
            <Typography
              className={classes.typography}
              variant="subtitle2"
              gutterBottom
            >
              {/* {place.name} */}
              End Location
            </Typography>
          </Paper>
        </div>

        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.length &&
          weatherData?.list?.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                height={100}
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
