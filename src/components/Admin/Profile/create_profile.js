import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";

import { createProfile } from "../../../redux/actions/profile.action";

const CreateProfile = ({ history }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("babu");
  const [lastName, setLastName] = useState("ibrar");
  const [phone, setPhone] = useState("03444850952");
  const [DateOfBirth, setDateOfBirth] = useState("10/21/1997");
  const [addressName, setAddressName] = useState("Shahdrah");
  const [country, setCountry] = useState("Pakistan");
  const [streetAddress, setStreetAddress] = useState("9");
  const [coordinates, setCoordinates] = useState("31.473186,74.2650702");
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const email = localStorage.getItem("UserEmail");
  const username = email.split("@")[0];
  // console.log("Create Profile Username", username);

  const auth = useSelector((state) => state.auth.user);
  // console.log("Create Profile UserId", auth);

  const createProfileHandler = async (e) => {
    e.preventDefault();

    const data = await dispatch(
      createProfile({
        address: {
          addressName,
          country,
          streetAddress,
          coordinates,
        },
        firstName,
        lastName,
        DateOfBirth,
        phone,
        username,
        auth,
      })
    );
    // console.log("data", data);
    if (data === undefined) {
      setErrorMessage(true);
    } else {
      history.push("/profile");
    }
    setShowCreateProfile(false);
  };

  const handleCreateProfile = (e) => {
    e.preventDefault();
    setShowCreateProfile(true);
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
              <h1 style={{ textTransform: "uppercase" }}>Hello {username}!</h1>
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
                <li>Create Profile</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="margin_60 container">
            <div>
              <div className="content1">
                <section id="section-4">
                  <div className="row">
                    <div class="col-sm-8">
                      <table class="table table-hover table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Create your own profile</th>
                            <th scope="col">{username}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Username</td>
                            <td>{username}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Email</td>
                            <td>{email}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <Button
                          type="submit"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textTransform: "unset",
                            marginTop: "100px",
                          }}
                          className="btn btn_full_outline py-2 px-5"
                          value="Create Profile"
                          onClick={handleCreateProfile}
                          startIcon={<PersonOutline />}
                        >
                          Create Profile
                        </Button>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div className="col-md-12">
                        <p>
                          <img
                            src="img/tourist_guide_pic.jpg"
                            alt="Image"
                            className="img-fluid styled profile_pic"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End row */}
                {showCreateProfile && (
                  <section>
                    <div className="divider" />

                    <div className="row">
                      <div className="col-md-12">
                        <h4>Create profile</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First name</label>
                          <input
                            className="form-control"
                            name="first_name"
                            id="first_name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last name</label>
                          <input
                            className="form-control"
                            name="last_name"
                            id="last_name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone number</label>
                          <input
                            className="form-control"
                            name="email_2"
                            id="email_2"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Date of birth <small>(dd/mm/yyyy)</small>
                          </label>
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="text"
                            value={DateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <h4>Address</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Street address</label>
                          <input
                            className="form-control"
                            name="first_name"
                            id="first_name"
                            type="text"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City/Town</label>
                          <input
                            className="form-control"
                            name="last_name"
                            id="last_name"
                            type="text"
                            value={addressName}
                            onChange={(e) => setAddressName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Coordinates</label>
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="text"
                            value={coordinates}
                            onChange={(e) => setCoordinates(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <select
                            id="country"
                            className="form-control"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            {errorMessage === true ? (
                              <h6
                                style={{
                                  color: "red",
                                  marginTop: "2px",
                                }}
                              >
                                <small>This field is Requird</small>
                              </h6>
                            ) : null}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                    <hr />
                    <h4>Upload profile photo</h4>
                    <div className="form-inline upload_1">
                      <div className="form-group">
                        <input
                          type="file"
                          name="files[]"
                          id="js-upload-files"
                          multiple
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn_1 green"
                        id="js-upload-submit"
                      >
                        Upload file
                      </button>
                    </div>
                    {/* Drop Zone */}
                    <h5>Or drag and drop files below</h5>
                    <div className="upload-drop-zone" id="drop-zone">
                      Just drag and drop files here
                    </div>
                    {/* Progress Bar */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    {/* Upload Finished */}
                    <div className="js-upload-finished">
                      <h5>Processed files</h5>
                      <div className="list-group">
                        <a
                          href="#"
                          className="list-group-item list-group-item-success"
                        >
                          <span className="badge alert-success pull-right">
                            Success
                          </span>
                          image-01.jpg
                        </a>
                      </div>
                    </div>
                    {/* End Hidden on mobiles */}
                    <hr />
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        textTransform: "unset",
                      }}
                      className="btn btn_full_outline py-2 px-5"
                      onClick={createProfileHandler}
                      startIcon={<PersonOutline />}
                    >
                      Create Profile
                    </Button>
                  </section>
                )}
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

export default CreateProfile;
