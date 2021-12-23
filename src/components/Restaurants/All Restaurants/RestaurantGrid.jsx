import React from "react";
import { Delete, Edit, Info } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const RestaurantGrid = ({
  restaurants,
  handleDeleteRestaurant,
  handleDetailRestaurant,
  handleUpdateRestaurant,
  role,
}) => {
  return (
    <div>
      <div className="row">
        {restaurants.map((restaurant) => (
          <div
            className="col-md-6 wow zoomIn"
            data-wow-delay="0.1s"
            key={restaurant._id}
          >
            <div className="tour_container">
              <div className="ribbon_3 popular">
                <span>Popular</span>
              </div>
              <div className="img_container">
                <a>
                  <img
                    src={
                      restaurant?.images[0]?.name
                        ? `http://localhost:3000/api/upload/file/${restaurant?.images[0]?.folderName}/fileName/${restaurant?.images[0]?.name}`
                        : "img/restaurant_box_1.jpg"
                    }
                    width={800}
                    height={533}
                    className="img-fluid"
                    alt="Image"
                  />
                </a>
              </div>
              <div className="tour_title">
                <h3>
                  <strong>{restaurant.name}</strong>
                </h3>
                <div className="rating">
                  <i className="icon-smile voted" />
                  <i className="icon-smile voted" />
                  <i className="icon-smile voted" />
                  <i className="icon-smile voted" />
                  <i className="icon-smile" />
                  <small>(75)</small>
                </div>
                {/* end rating */}
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="#">
                    +
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
                {/* End wish list*/}
                {role === "admin" && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="btn"
                  >
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<Edit />}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                      }}
                      onClick={(e) => handleUpdateRestaurant(e, restaurant._id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Delete />}
                      style={{
                        color: "red",
                      }}
                      onClick={(e) => handleDeleteRestaurant(e, restaurant._id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Info />}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                  }}
                  onClick={(e) => handleDetailRestaurant(e, restaurant._id)}
                >
                  Details
                </Button>
              </div>
            </div>
            {/* End box tour */}
          </div>
        ))}

        {/* End col-md-6 */}
      </div>
    </div>
  );
};

export default RestaurantGrid;
