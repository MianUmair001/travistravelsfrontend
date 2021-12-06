import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import axios from "axios";
import { uploadImage } from "../../../../redux/actions/upload.action";

const PlaceDetails = ({
  place,
  selected,
  refProp,
  setName,
  setDescription,
  setImages,
  handlePlaceCreateSubmit,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleClick = async (e) => {
    setName(place.name);
    setDescription(place.description);

    let formData = new FormData();
    const response = await fetch(
      "https://images.unsplash.com/photo-1610303785445-41db41838e3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    );
    const blob = await response.blob();
    const file = new File([blob], "image.jpeg", { type: blob.type });

    formData.append("file", file);
    formData.append("isPlaceImage", true);
    const { data } = await dispatch(uploadImage(formData));
    setImages(data);
    /** setImages(place.photo.images); */
    handlePlaceCreateSubmit(e, place.name, place.description, data);
  };
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        {place?.description && (
          <Typography gutterBottom variant="h6">
            {place.description}
          </Typography>
        )}

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews.
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            align-items="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography varient="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
          <Button size="small" color="primary" onClick={(e) => handleClick(e)}>
            Add Place
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
