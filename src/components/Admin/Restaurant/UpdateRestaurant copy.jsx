import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAllDishes } from "../../../redux/actions/dishes.action";
import {
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
} from "../../../redux/actions/restaurant.action";
import { uploadImage } from "../../../redux/actions/upload.action";
import "../Styles/admin.css";

const UpdateRestaurant = () => {
  const restaurantid = useParams();
  console.log(restaurantid);
  const dispatch = useDispatch();
  const [name, setName] = useState("AlKhan Restaurant");
  const [description, setDescription] = useState(
    "ABeautifull Restaurant with So many Dishes to eat."
  );
  const [createSchedule, setCreateSchedule] = useState(false);
  const [addressName, setAddressName] = useState("Lahore Pakistan");
  const [noOfTables, setNoOfTables] = useState("30");
  const [country, setCountry] = useState("Pakistan");
  const [streetAddress, setStreetAddress] = useState("221B Baker Street");
  const [openingTime, setOpeningTime] = useState([]);
  const [menu, setMenu] = useState([]);
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [dishes, setDishes] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [taskName, setTaskName] = useState("Deal 01");
  const [startTime, setStartTime] = useState("08:00 AM");
  const [endTime, setEndTime] = useState("10:00 PM");
  const [completed, setCompleted] = useState(false);
  const [nameOfTheDay, setNameOfTheDay] = useState("Monday");
  const [dateOfDay, setDateOfDay] = useState("7/10/2021");
  const [coordinates, setCoordinates] = useState("31.473186, 74.2650702");
  const [schedule, setSchedule] = useState([]);

  const optionsData = [];

  const setScheduleArray = (e) => {
    e.preventDefault();
    schedule.push({
      taskName,
      startTime,
      endTime,
      completed,
      nameOfTheDay,
      dateOfDay,
    });
    setTaskName("");
    setStartTime("");
    setEndTime("");
    setCompleted(false);
    setNameOfTheDay("");
    setDateOfDay("");
    setCreateSchedule(false);
  };

  useEffect(async () => {
    const restaurantData = await dispatch(getRestaurantById(restaurantid.id));
    setName(restaurantData.name);
    setNoOfTables(restaurantData.noOfTables);
    setDescription(restaurantData.description);
    setAddressName(restaurantData.addressName);
    setCountry(restaurantData.country);
    setStreetAddress(restaurantData.streetAddress);
    console.log(restaurantData);
    const data = await dispatch(getAllDishes());
    setDishes(data);
    console.log("Data comming back from getAllDishes", data);
    data?.map((dish) => {
      optionsData.push({
        label: dish.name,
        value: dish.name,
        _id: dish._id,
        name: dish.name,
        description: dish.description,
        price: dish.price,
        images: dish.images,
      });
    });
    setOptions(optionsData);
  }, [selectedOptions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I am Dishes Data", selectedOptions);
    setMenu(selectedOptions);

    console.log(
      restaurantid.id,
      name,
      description,
      addressName,
      country,
      streetAddress,
      noOfTables,
      menu,
      images,
      schedule
    );
    dispatch(
      updateRestaurant(
        restaurantid.id,
        name,
        description,
        {
          addressName,
          country,
          streetAddress,
        },
        noOfTables,
        menu,
        images,
        schedule
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
                    <h4>Create Restaurant</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Restaurant Name</label>
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
                      <label>Restaurant Description</label>
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
                      <label>Address Name</label>
                      <input
                        className="form-control"
                        name="noOfTables"
                        id="noOfTables"
                        type="text"
                        value={addressName}
                        onChange={(e) => setAddressName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        className="form-control"
                        name="noOfTables"
                        id="noOfTables"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Street Address</label>
                      <input
                        className="form-control"
                        name="noOfTables"
                        id="noOfTables"
                        type="text"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Coordinates</label>
                      <input
                        className="form-control"
                        name="noOfTables"
                        id="noOfTables"
                        type="text"
                        value={coordinates}
                        onChange={(e) => setCoordinates(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>No of Tables</label>
                      <input
                        className="form-control"
                        name="noOfTables"
                        id="noOfTables"
                        type="text"
                        value={noOfTables}
                        onChange={(e) => setNoOfTables(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Upload Images</label>
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

                  <div className="col-sm-6">
                    <label>Menu</label>
                    <MultiSelect
                      options={options}
                      value={selectedOptions}
                      onChange={setSelectedOptions}
                      labelledBy="Select"
                    />
                  </div>
                </div>
                {/* End row */}

                <hr />

                <div className="row">
                  <button
                    type="submit"
                    className="btn_1 green"
                    onClick={(e) => setCreateSchedule(true)}
                  >
                    Add Schedule
                  </button>
                </div>
                <hr />

                {createSchedule && (
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Create Schedule</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Task Name</label>
                        <input
                          id="taskname"
                          className="form-control"
                          name="taskname"
                          type="text"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Start Time</label>
                        <input
                          className="form-control"
                          name="taskname"
                          id="taskname"
                          type="text"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>End Time</label>
                        <input
                          className="form-control"
                          name="taskname"
                          id="taskname"
                          type="text"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Schedule Status</label>
                        <input
                          className="form-control"
                          name="taskname"
                          id="taskname"
                          type="text"
                          value={completed}
                          onChange={(e) => setCompleted(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Day Name</label>
                        <input
                          className="form-control"
                          name="taskname"
                          id="taskname"
                          type="text"
                          value={nameOfTheDay}
                          onChange={(e) => setNameOfTheDay(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Date of Day</label>
                        <input
                          className="form-control"
                          name="taskname"
                          id="taskname"
                          type="text"
                          value={dateOfDay}
                          onChange={(e) => setDateOfDay(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn_1 green"
                      onClick={(e) => setScheduleArray(e)}
                    >
                      Create Schedule
                    </button>
                  </div>
                )}

                <hr />
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={(e) => handleSubmit(e)}
                >
                  Update Restaurant
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

export default UpdateRestaurant;
