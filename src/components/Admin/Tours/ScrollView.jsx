import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import useStyles from "./styles";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </div>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </div>
  );
};

// function Card({ onClick, selected, title, itemId }) {
//   const visibility = React.useContext(VisibilityContext);

//   return (
//     <div
//       onClick={() => onClick(visibility)}
//       style={{
//         width: "160px",
//       }}
//       tabIndex={0}
//     >
//       <div className="card">
//         <div>{title}</div>
//         <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
//         <div>selected: {JSON.stringify(!!selected)}</div>
//       </div>
//       <div
//         style={{
//           height: "200px",
//         }}
//       />
//     </div>
//   );
// }

const ScrollView = ({ attractionsData }) => {
  const [items, setItems] = useState();
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const classes = useStyles();

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {attractionsData.map((attraction) => (
        <Card elevation={6} style={{ marginLeft: "10px", width: "500px" }}>
          <CardMedia
            style={{ height: 350 }}
            image={
              attraction.photo
                ? attraction.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            title={attraction.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {attraction.name}
            </Typography>

            {attraction?.description && (
              <Typography gutterBottom variant="h6">
                {attraction.description.split(".")[0]}
              </Typography>
            )}

            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Price</Typography>
              <Typography gutterBottom variant="subtitle1">
                {attraction.price_level}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Rating value={Number(attraction.rating)} readOnly />
              <Typography gutterBottom variant="subtitle1">
                out of {attraction.num_reviews} reviews.
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                {attraction.ranking}
              </Typography>
            </Box>
            {attraction?.awards?.map((award) => (
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
            {attraction?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                className={classes.chip}
              />
            ))}
            {attraction.address && (
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                className={classes.subtitle}
              >
                <LocationOnIcon />
                {attraction.address}
              </Typography>
            )}
            {attraction.phone && (
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.spacing}
              >
                <PhoneIcon /> {attraction.phone}
              </Typography>
            )}
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(attraction.web_url, "_blank")}
              >
                Trip Advisor
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(attraction.website, "_blank")}
              >
                Website
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={(e) => handleClick(e)}
              >
                Add Place
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </ScrollMenu>
  );
};

export default ScrollView;
