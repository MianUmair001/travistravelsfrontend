import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../Styles/admin.css";
import { createTour } from "../../../redux/actions/tour.action";
import { getPlaces } from "../../../redux/actions/places.action";
import { MultiSelect } from "react-multi-select-component";
import { uploadImage } from "../../../redux/actions/upload.action";

const CreateTour = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("NaranKaghan");
  const [description, setDescription] = useState(
    "A Tour from Lahore to Naran Kaghan"
  );
  const [startLocation, setStartLocation] = useState("Lahore");
  const [endLocation, setEndLocation] = useState("NaranKaghan");
  const [price, setPrice] = useState("3000");
  const [startDate, setStartDate] = useState("7/29/2021");
  const [endDate, setEndDate] = useState("8/5/2021");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [status, setStatus] = useState("");
  const [tourType, setTourType] = useState("");
  const optionsData = [];
  const [images, setImages] = useState([]);

  useEffect(async () => {
    const { data } = await dispatch(getPlaces());
    setPlaces(data);
    data?.map((place) => {
      optionsData.push({
        label: place.name,
        value: place.name,
        _id: place._id,
        name: place.name,
        description: place.description,
        images: place.images,
        createdAt: place.createdAt,
        updatedAt: place.updatedAt,
      });
    });
    setOptions(optionsData);
  }, [selectedOptions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const places = selectedOptions;
    console.log("I amImages Data before Dispatch", images);
    dispatch(
      createTour(
        name,
        description,
        "withtravistravels",
        startLocation,
        endLocation,
        Number(price),
        startDate,
        endDate,
        "initialized",
        places,
        images
      )
    );
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
                    <h4>Create Tour</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Name</label>
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
                      <label>Description</label>
                      <input
                        className="form-control"
                        name="description"
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Type</label>
                      <select
                        id="tourType"
                        className="form-control"
                        name="tourType"
                        defaultValue="Company"
                        name={tourType}
                        onChange={(e) => setTourType(e.target.value)}
                      >
                        <option value>Company</option>
                        <option value>User</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Location</label>
                      <input
                        className="form-control"
                        name="startLocation"
                        id="startLocation"
                        type="text"
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Location</label>
                      <input
                        className="form-control"
                        name="endLocation"
                        id="endLocation"
                        type="text"
                        value={endLocation}
                        onChange={(e) => setEndLocation(e.target.value)}
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
                      <label>StartDate</label>
                      <input
                        className="form-control"
                        name="startDate"
                        id="startDate"
                        type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>endDate</label>
                      <input
                        className="form-control"
                        name="endDate"
                        id="endDate"
                        type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tour Type</label>
                      <select
                        id="tourType"
                        className="form-control"
                        name="tourType"
                        defaultValue="Company"
                        name={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="initialized">Initialized</option>
                        <option value="inprocess">Inprocess</option>
                        <option value="started">Started</option>
                        <option value="onjourney">Onjourney</option>
                        <option value="ended">Ended</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label>Places</label>
                    <MultiSelect
                      options={options}
                      value={selectedOptions}
                      onChange={setSelectedOptions}
                      labelledBy="Select"
                    />
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
                  Create Tour
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

export default CreateTour;
