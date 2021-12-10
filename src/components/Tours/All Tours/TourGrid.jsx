import React from "react";
import { Button } from "@material-ui/core";
import { Edit, Delete, Info } from "@material-ui/icons";

const TourGrid = ({
  tours,
  handleDeleteTour,
  handleUpdateTour,
  handleDetailTour,
  role,
  isHome,
}) => {
  return (
    <div>
      <div class="row">
        {tours?.map((tour) => (
          <div
            class={
              isHome ? "col-lg-4 col-md-6 wow zoomIn" : "col-md-6 wow zoomIn"
            }
            data-wow-delay="0.3s"
            key={tour._id}
          >
            <div class="tour_container">
              <div class="ribbon_3 popular">
                <span>Popular</span>
              </div>
              <div class="img_container">
                <a href="single_tour.html">
                  <img
                    src={
                      tour?.images[0]?.name
                        ? `http://localhost:3000/api/upload/file/${tour?.images[0]?.folderName}/fileName/${tour?.images[0]?.name}`
                        : "img/restaurant_box_1.jpg"
                    }
                    key={tour?.images[0]?._id}
                    alt={tour.name}
                    width="800"
                    height="533"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="short_info">
                    <i class="icon_set_1_icon-44"></i>Historic Buildings
                    <span class="price" style={{ fontSize: "20px" }}>
                      PKR: {tour.price}
                    </span>
                  </div>
                </a>
              </div>
              <div class="tour_title">
                <h3>
                  <strong>{tour.name}</strong> tour
                </h3>
                <div class="rating">
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile voted"></i>
                  <i class="icon-smile"></i>
                  <small>(75)</small>
                </div>
                {/* end rating */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="btn"
                >
                  {role === "admin" && (
                    <>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<Edit />}
                        style={{
                          backgroundColor: "green",
                          color: "white",
                        }}
                        onClick={(e) => handleUpdateTour(e, tour._id)}
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
                        onClick={(e) => handleDeleteTour(e, tour._id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Info />}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                    }}
                    onClick={(e) => handleDetailTour(e, tour._id)}
                  >
                    Details
                  </Button>
                </div>

                {/* End wish list */}
              </div>
            </div>
            {/* End box tour */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGrid;
