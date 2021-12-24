import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/admin.css";
import {
  createPlaces,
  getPlaceById,
  getPlaces,
  updatePlaces,
} from "../../../redux/actions/places.action";
import { uploadImage } from "../../../redux/actions/upload.action";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "./List/List";
import Map from "./Map/Map";
import { getPlacesData, getWeatherData } from "../api";

const UpdatePlace = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("Naran Kaghan");
  const [description, setDescription] = useState("A Beautiful Place to Visit");
  const [images, setImages] = useState();
  const userEmail = useSelector((state) => state.auth.userEmail);
  useEffect(async () => {
    const { name, description, images } = await dispatch(
      getPlaceById("615327dabb131e276cdbb207")
    );
    console.log(name, description, images);
    setName(name);
    setDescription(description);
    setImages(images);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, description, images);
    const id = "615327dabb131e276cdbb207";
    console.log(typeof id);
    dispatch(updatePlaces(id, name, description, [images]));
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
            <h1>Hello {userEmail?.split("@")[0]}!</h1>
            <p>
              Top Pakistan hotels,Tours,Restaurant,Transports with great offers
              and cheap prices.
            </p>
          </div>
        </div>
      </section>
      {/* End section */}
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
                    <h4>Update Place</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Place Name</label>
                      <input
                        className="form-control"
                        name="place_name"
                        id="place_name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Place Description</label>
                      <input
                        className="form-control"
                        name="placedescription"
                        id="placedescription"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Images</label>
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
                          setImages("I am Images Data", data);
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
                  Update Place
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

export default UpdatePlace;
