import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPlans } from "../../../redux/actions/plan.action";
import { createRoom } from "../../../redux/actions/rooms.action";
import { useHistory, useParams } from "react-router";
import { uploadImage } from "../../../redux/actions/upload.action";
import { Button } from "@material-ui/core";

const CreateRooms = () => {
  const hotelId = useParams();
  const dispatch = useDispatch();
  const [noOfBeds, setNoOfBeds] = useState("2");
  const [noOfBathroom, setNoOfBathroom] = useState("2");
  const [planName, setPlanName] = useState("Basic");
  const [hotel, setHotel] = useState("");
  const [plans, setPlans] = useState([]);
  const [type, setType] = useState("615c177e01eafd67e4a3580a");
  const [images, setImages] = useState([]);
  const [addRoom, setAddRoom] = useState(false);
  const history = useHistory();
  const options = [];
  const [price, setPrice] = useState(0);
  useEffect(async () => {
    const data = await dispatch(getPlans());
    console.log("I am plans", data);
    setPlans(data);
    // for (let i = 0; i < data?.length; i++) {
    //   options.push({ id: data._id, value: data[i].name });
    // }
    if (data?.length > 0) {
      if (document.getElementsByName(data[0].name)) {
        const option = document.getElementsByName(data[0].name);
        option[0].value = `${data[0]._id},${data[0].name}`;
        option[0].innerHTML = `${data[0].name}`;
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(type, noOfBathroom, noOfBeds);

    const data = await dispatch(
      createRoom(
        hotelId.id,
        noOfBathroom,
        noOfBeds,
        type,
        planName,
        images,
        price
      )
    );
    console.log("I am data", data);
    if (data.statusCode === 201) {
      setAddRoom(true);
    }
  };
  const handlePlanClick = (e, data) => {
    e.preventDefault();
    setType(data.split(",")[0]);
    setPlanName(data.split(",")[1]);
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
        <div className="margin_60 container">
          <div>
            <div className="content1">
              <section id="section-4">
                {/* End row */}
                <div className="divider" />

                <div className="row">
                  <div className="col-md-12">
                    <h4>Create {addRoom && "Another"} Room</h4>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No Of Beds</label>
                      <input
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        type="text"
                        value={noOfBeds}
                        onChange={(e) => setNoOfBeds(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No Of Bathrooms</label>
                      <input
                        className="form-control"
                        name="description"
                        id="description"
                        type="text"
                        value={noOfBathroom}
                        onChange={(e) => setNoOfBathroom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        className="form-control"
                        name="description"
                        id="description"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Plan Name</label>
                      <select
                        id="planName"
                        className="form-control"
                        name="planName"
                        defaultValue="Basic"
                        onChange={(e) => {
                          handlePlanClick(e, e.target.value);
                        }}
                      >
                        {plans?.map((plan) => (
                          <option
                            value={[plan._id, plan.name]}
                            name={plan.name}
                            key={plan._id}
                          >
                            {plan.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Upload Images</label>
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={async (e) => {
                          let formData = new FormData();
                          formData.append("file", e.target.files[0]);
                          formData.append("isRoomImage", true);
                          const { data } = await dispatch(
                            uploadImage(formData)
                          );
                          console.log("I am data", data);
                          setImages(data);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <button
                  type="submit"
                  className="btn_1 green"
                  onClick={handleSubmit}
                >
                  Create Room
                </button>

                <Button
                  onClick={(e) => {
                    history.push("/");
                  }}
                >
                  Back
                </Button>
              </section>
              {/* End section 4 */}
            </div>
            {/* End content */}
          </div>
          {/* End tabs */}
        </div>

        {/* End Position */}

        {/* end container */}
      </main>
      {/* End main */}
    </>
  );
};

export default CreateRooms;
