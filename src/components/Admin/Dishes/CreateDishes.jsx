import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/admin.css";
import { createTour } from "../../../redux/actions/tour.action";
import { getPlaces } from "../../../redux/actions/places.action";
import { MultiSelect } from "react-multi-select-component";
import { uploadImage } from "../../../redux/actions/upload.action";
import {
  createDishes,
  getAllDishes,
} from "../../../redux/actions/dishes.action";

const CreateDishes = ({ inRestaurant }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("Qorma");
  const [description, setDescription] = useState(
    "A Rise Dishes very beautiful and tasty"
  );
  const [price, setPrice] = useState("1000");
  const [images, setImages] = useState([]);
  const userEmail = useSelector((state) => state.auth.userEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createDishes(name, description, Number(price), images));
    await dispatch(getAllDishes());
    window.location.reload(true);
  };

  return (
    <>
      {!inRestaurant && (
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="img/admin_top.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1>Hello {userEmail?.split("@")[0]}</h1>
              <p>
                Top Pakistan hotels,Tours,Restaurant,Transports with great
                offers and cheap prices.
              </p>
            </div>
          </div>
        </section>
      )}

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
                    <h4>Create Dishes</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Dish Name</label>
                      <input
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Dish Description</label>
                      <input
                        className="form-control"
                        name="description"
                        id="description"
                        type="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                      <label>Dishes Images</label>
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
                </div>
                {/* End row */}

                <hr />
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={handleSubmit}
                >
                  Create Dish
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

export default CreateDishes;
