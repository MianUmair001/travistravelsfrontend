import React from "react";
import { Delete, Edit, Info } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const DishesGrid = ({
  dishes,
  handleDeleteDishes,
  handleDetailDishes,
  handleUpdateDishes,
  role,
}) => {
  return (
    <div>
      <div className="row">
        {dishes?.map((dish) => (
          <div
            className="col-md-6 wow zoomIn"
            data-wow-delay="0.1s"
            key={dish?._id}
          >
            <div className="tour_container">
              <div className="ribbon_3 popular">
                <span>Popular</span>
              </div>
              <div className="img_container">
                <a>
                  <img
                    src={
                      dish?.images[0]?.name
                        ? `http://localhost:3000/api/upload/file/${dish?.images[0]?.folderName}/fileName/${dish?.images[0]?.name}`
                        : "img/dish_box_1.jpg"
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
                  <strong>{dish?.name}</strong>
                </h3>
                <h3>
                  <strong>Price:{dish?.price} PKR</strong>
                </h3>

                {/* end rating */}

                {/* End wish list*/}
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
                        onClick={(e) => handleUpdateDishes(e, dish._id)}
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
                        onClick={(e) => handleDeleteDishes(e, dish._id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </div>
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

export default DishesGrid;
