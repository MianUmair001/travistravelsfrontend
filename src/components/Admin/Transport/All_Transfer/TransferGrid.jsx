import React from "react";
import { Button } from "@material-ui/core";
import { Edit, DeleteOutlined, Info } from "@material-ui/icons";

const TransferGrid = ({
  transportsListShow,
  handleDeleteTransport,
  handleDetailTransport,
  handleUpdateTransport,
  role,
}) => {
  return (
    <>
      <div className="row">
        {transportsListShow?.map((transportGrid) => (
          <div
            className="col-md-6 wow zoomIn"
            data-wow-delay="0.1s"
            key={transportGrid._id}
          >
            <div className="hotel_container">
              <div className="ribbon_3 popular">
                <span>Popular</span>
              </div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img
                    src={
                      transportGrid?.images[0]?.name
                        ? `http://localhost:3000/api/upload/file/${transportGrid?.images[0]?.folderName}/fileName/${transportGrid?.images[0]?.name}`
                        : "img/tour_box_1.jpg"
                    }
                    width={800}
                    height={533}
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="score">
                    <span>7.5</span>Good
                  </div>
                  <div className="short_info hotel">
                    price Per killometer
                    <span className="price">
                      <sup>$</sup>
                      {transportGrid.pricePerKillomter}
                    </span>
                  </div>
                </a>
              </div>
              <div className="hotel_title">
                <h3>
                  <strong>{transportGrid.name}</strong>
                </h3>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star-empty" />
                </div>
                {/* end rating */}

              </div>
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
                      onClick={(e) => handleUpdateTransport(e, transportGrid)}
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
                      onClick={(e) => handleDeleteTransport(e, transportGrid)}
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
                  onClick={(e) => handleDetailTransport(e, transportGrid)}
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

export default TransferGrid;
