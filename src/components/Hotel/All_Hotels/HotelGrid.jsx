import React from "react";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";

const HotelGrid = ({
  hotels,
  handleDeleteHotel,
  handleDetailHotel,
  handleUpdateHotel,
  role,
  isHome,
}) => {
  return (
    <>
      <div className="row">
        {hotels?.map((hotel) => (
          <div
            className={
              isHome ? "col-lg-4 col-md-6 wow zoomIn" : "col-md-6 wow zoomIn"
            }
            data-wow-delay="0.1s"
            key={hotel?._id}
          >
            <div className="hotel_container">
              <div className="ribbon_3 popular">
                <span>Popular</span>
              </div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img
                    src={
                      hotel?.images[0]?.name
                        ? `http://localhost:3000/api/upload/file/${hotel?.images[0]?.folderName}/fileName/${hotel?.images[0]?.name}`
                        : "img/tour_box_1.jpg"
                    }
                    alt="Image"
                    width={800}
                    height={533}
                    className="img-fluid"
                    alt="Image"
                  />

                  {/* <div className="short_info hotel">
                    From/Per night
                    <span className="price" style={{ fontSize: "20px" }}>
                      PKR: {hotel.price}
                    </span>
                  </div> */}
                </a>
              </div>
              <div className="hotel_title">
                <h3>
                  <strong>{hotel?.name}</strong>
                </h3>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star-empty" />
                </div>
                {/* end rating */}

                {/* End wish list*/}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {role === "admin" && (
                  <>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<Edit />}
                      style={{
                        className: "btn",
                        backgroundColor: "green",
                        color: "white",
                      }}
                      onClick={(e) => handleUpdateHotel(e, hotel)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteOutlined />}
                      style={{
                        color: "red",
                      }}
                      onClick={(e) => handleDeleteHotel(e, hotel?._id)}
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
                    margin: "0 10px 10px 0",
                  }}
                  onClick={(e) => handleDetailHotel(e, hotel?._id)}
                >
                  Details
                </Button>
              </div>
            </div>
            {/* End box tour */}
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelGrid;
