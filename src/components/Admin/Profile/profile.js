import React from "react";
import { Link } from "react-router-dom";


const Profile = () => {
  return (
    <>
    <div>
    <section className="parallax-window" data-parallax="scroll" data-image-src="img/admin_top.jpg" data-natural-width={1400} data-natural-height={470}>
      <div className="parallax-content-1">
        <div className="animated fadeInDown">
          <h1>Hello Clara!</h1>
          <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
        </div>
      </div>
    </section>
    {/* End section */}
    <main>
      <div id="position">
        <div className="container">
          <ul>
            <li><a href="#">Home</a>
            </li>
            <li><a href="#">Category</a>
            </li>
            <li>Page active</li>
          </ul>
        </div>
      </div>
      {/* End Position */}
      <div className="margin_60 container">
        <div >
          <div className="content1">
            
            <section id="section-4">
              <div className="row">
                <div className="col-md-6">
                  <h4>Your profile</h4>
                  <ul id="profile_summary">
                    <li>Username <span>info@clara.com</span>
                    </li>
                    <li>First name <span>Clara</span>
                    </li>
                    <li>Last name <span>Tomson</span>
                    </li>
                    <li>Phone number <span>+00 032 42366</span>
                    </li>
                    <li>Date of birth <span>13/04/1975</span>
                    </li>
                    <li>Street address <span>24 Rue de Rivoli</span>
                    </li>
                    <li>Town/City <span>Paris</span>
                    </li>
                    <li>Zip code <span>002843</span>
                    </li>
                    <li>Country <span>France</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>
                    <img src="img/tourist_guide_pic.jpg" alt="Image" className="img-fluid styled profile_pic" />
                  </p>
                </div>
              </div>
              {/* End row */}
              <div className="divider" />
              <div className="row">
                <div className="col-md-12">
                  <h4>Edit profile</h4>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First name</label>
                    <input className="form-control" name="first_name" id="first_name" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last name</label>
                    <input className="form-control" name="last_name" id="last_name" type="text" />
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone number</label>
                    <input className="form-control" name="email_2" id="email_2" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Date of birth <small>(dd/mm/yyyy)</small>
                    </label>
                    <input className="form-control" name="email" id="email" type="text" />
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <h4>Edit address</h4>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Street address</label>
                    <input className="form-control" name="first_name" id="first_name" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>City/Town</label>
                    <input className="form-control" name="last_name" id="last_name" type="text" />
                  </div>
                </div>
              </div>
              {/* End row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Zip code</label>
                    <input className="form-control" name="email" id="email" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select id="country" className="form-control" name="country">
                      <option value>Select...</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End row */}
              <hr />
              <h4>Upload profile photo</h4>
              <div className="form-inline upload_1">
                <div className="form-group">
                  <input type="file" name="files[]" id="js-upload-files" multiple />
                </div>
                <button type="submit" className="btn_1 green" id="js-upload-submit">Upload file</button>
              </div>
              {/* Drop Zone */}
              <h5>Or drag and drop files below</h5>
              <div className="upload-drop-zone" id="drop-zone">
                Just drag and drop files here
              </div>
              {/* Progress Bar */}
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              {/* Upload Finished */}
              <div className="js-upload-finished">
                <h5>Processed files</h5>
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-success"><span className="badge alert-success pull-right">Success</span>image-01.jpg</a>
                </div>
              </div>
              {/* End Hidden on mobiles */}
              <hr />
              <button type="submit" className="btn_1 green">Update Profile</button>
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

export default Profile;
