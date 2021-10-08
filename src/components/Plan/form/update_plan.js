import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";
import { updatePlan } from "../../../redux/actions/plan.action";

const UpdatePlan = ({ history }) => {
  const dispatch = useDispatch();

  const { planID, description, price, name, rooms } = useSelector(state => state.plan )  
  const [description_, setDescription] = useState(description);
  const [price_, setPrice] = useState(price);
  const [name_, setName] = useState(name);
  const [rooms_, setRooms] = useState(rooms);
  
  
  
  const updatePlanHandler =async(e) => {
    e.preventDefault();
   await dispatch( updatePlan( planID, name_, description_, price_, rooms_ ))
  };

  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="img/admin_top.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1 style={{ textTransform: "uppercase" }}>Hello...!</h1>
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Category</Link>
                </li>
                <li>Update Plan</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="margin_60 container">
            <div>
              <div className="content1">
                {/* End row */}
                <section>
                  <div className="divider" />

                  <div className="row">
                    <div className="col-md-12">
                      <h4>Edit Your Plan</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Plan Name</label>
                        <input
                          className="form-control"
                          name="name"
                          type="text"
                          value={name_}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          className="form-control"
                          name="price"
                          type="text"
                          value={price_}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          className="form-control"
                          name="description"
                          type="text"
                          value={description_}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Rooms</label>
                        <input
                          className="form-control"
                          name="rooms"
                          type="text"
                          value={rooms_}
                          onChange={(e) => setRooms(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <hr />
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      textTransform: "unset",
                    }}
                    className="btn btn_full_outline py-2 px-5"
                    onClick={ updatePlanHandler }
                    startIcon={<PersonOutline />}
                  >
                    Update
                  </Button>
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
      </div>
    </>
  );
};

export default UpdatePlan;
