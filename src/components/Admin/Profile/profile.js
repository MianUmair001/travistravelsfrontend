import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Delete, PersonOutline } from "@material-ui/icons";

import {
  deleteProfile,
  updateprofile,
} from "../../../redux/actions/profile.action";

const Profile = ({ history }) => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.userEmail);
  const token = useSelector((state) => state.auth.accessToken);

  const { address, firstName, lastName, DateOfBirth, phone, username, auth } =
    useSelector((state) => state.profile);

  const [firstNameUser, setFirstNameUser] = useState(firstName);
  const [lastNameUser, setLastNameUser] = useState(lastName);
  const [phoneUser, setPhoneUser] = useState(phone);
  const [DateOfBirthUser, setDateOfBirthUser] = useState(DateOfBirth);
  const [addressNameUser, setAddressNameUser] = useState(address.addressName);
  const [countryUser, setCountryUser] = useState(address.country);
  const [streetAddressUser, setStreetAddressUser] = useState(
    address.streetAddress
  );
  const [coordinatesUser, setCoordinatesUser] = useState(address.coordinates);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  console.log(firstNameUser, lastNameUser);

  const updateProfileHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateprofile(
        {
          address: {
            addressNameUser,
            countryUser,
            streetAddressUser,
            coordinatesUser,
          },
          firstNameUser,
          lastNameUser,
          DateOfBirthUser,
          phoneUser,
          username,
          auth,
        },
        token
      )
    );
    setShowUpdateProfile(false);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setShowUpdateProfile(true);
  };

  const handleDeleteProfile = (e) => {
    e.preventDefault();

    dispatch(deleteProfile(auth, token));
    history.push("/create_profile");
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
              <h1 style={{ textTransform: "uppercase" }}>
                Hello {firstName} {lastName}!
              </h1>
              <p>
                Ridiculus sociosqu cursus neque cursus curae ante scelerisque
                vehicula.
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
                  <div className="row">
                    <div class="col-sm-8">
                      <table class="table table-hover table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Welcome To Your Profile</th>
                            <th
                              scope="col"
                              style={{ textTransform: "uppercase" }}
                            >
                              {firstName} {lastName}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>First Name</td>
                            <td>{firstName}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Last Name</td>
                            <td>{lastName}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Username</td>
                            <td>{username}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Email</td>
                            <td>{email}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Phone Number</td>
                            <td>{phone}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>
                              Date Of Birth
                            </td>
                            <td>{DateOfBirth}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>City/Town</td>
                            <td>{address.addressName}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Streat No</td>
                            <td>{address.streetAddress}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Country</td>
                            <td>{address.country}</td>
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
                          value="Update Profile"
                          onClick={handleUpdateProfile}
                          startIcon={<PersonOutline />}
                        >
                          Update Profile
                        </Button>
                        <Button
                          type="submit"
                          style={{
                            color: "red",
                            textTransform: "unset",
                            marginTop: "100px",
                          }}
                          variant="outlined"
                          className="btn btn_full_outline py-2 px-5 float-right"
                          value="Update Profile"
                          onClick={handleDeleteProfile}
                          startIcon={<Delete />}
                        >
                          Delete Profile
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
                {showUpdateProfile && (
                  <section>
                    <div className="divider" />
                    <div className="row">
                      <div className="col-md-12">
                        <h4>Edit profile</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First name</label>
                          <input
                            className="form-control"
                            type="text"
                            value={firstNameUser}
                            onChange={(e) => setFirstNameUser(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last name</label>
                          <input
                            className="form-control"
                            type="text"
                            value={lastNameUser}
                            onChange={(e) => setLastNameUser(e.target.value)}
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
                            type="text"
                            value={phoneUser}
                            onChange={(e) => setPhoneUser(e.target.value)}
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
                            type="text"
                            value={DateOfBirthUser}
                            onChange={(e) => setDateOfBirthUser(e.target.value)}
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
                            type="text"
                            value={streetAddressUser}
                            onChange={(e) =>
                              setStreetAddressUser(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City/Town</label>
                          <input
                            className="form-control"
                            type="text"
                            value={addressNameUser}
                            onChange={(e) => setAddressNameUser(e.target.value)}
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
                            type="text"
                            value={coordinatesUser}
                            onChange={(e) => setCoordinatesUser(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            className="form-control"
                            type="text"
                            value={countryUser}
                            onChange={(e) => setCountryUser(e.target.value)}
                          />
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
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        textTransform: "unset",
                      }}
                      type="submit"
                      className="btn btn_full_outline py-2 px-5"
                      onClick={updateProfileHandler}
                      startIcon={<PersonOutline />}
                    >
                      Update Profile
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

export default Profile;
