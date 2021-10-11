import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../Styles/admin.css";
import { createTour } from "../../../redux/actions/tour.action";
import { getPlaces } from "../../../redux/actions/places.action";
import { MultiSelect } from "react-multi-select-component";
import { uploadImage } from "../../../redux/actions/upload.action";
import {
  createRestaurant,
  getDishById,
  updateDishes,
  updateRestaurant,
} from "../../../redux/actions/dishes.action";
import { useParams } from "react-router";

const UpdateDishes = () => {
  const { id = "615dab6cfc13ba1f3c3cdc30" } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState("Qorma");
  const [description, setDescription] = useState(
    "A Rise Dishes very beautiful and tasty"
  );
  const [price, setPrice] = useState("1000");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const { name, description, price, images } = dispatch(getDishById());
    console.log(name, description, price, images);
    setName(name);
    setDescription(description);
    setPrice(price);
    setImages(images);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateDishes(id, name, description, Number(price), images));
  };

  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/admin_top.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Hello Clara!</h1>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
          </div>
        </div>
      </section>
      {/* End section */}
      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>Page active</li>
            </ul>
          </div>
        </div>
        {/* End Position */}
        <div className="margin_60 container">
          <div>
            <div className="content1">
              <section id="section-4">
                {/* End row */}
                <div className="divider" />
                <div className="row">
                  <div className="col-md-12">
                    <h4>Update Restaurant</h4>
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
                  Update Dishes
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

export default UpdateDishes;
