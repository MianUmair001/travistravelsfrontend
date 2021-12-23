import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

const FinishBooking = ({}) => {
  const location = useLocation();
  let userEmail = useSelector((state) => state.auth.userEmail);
  userEmail = userEmail.split("@")[0];
  const history = useHistory();
  
  const params = location.state;
  return (
    <>
      <section
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/hotels_bg.jpg"
        data-natural-width={1400}
        data-natural-height={470}
      >
        <div className="parallax-content-1">
          <div className="animated fadeInDown">
            <h1>Pakistan Hotels</h1>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
          </div>
        </div>
      </section>
      <div>
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8 add_bottom_15">
              <div className="form_title">
                <h3>
                  <strong>
                    <i className="icon-ok" />
                  </strong>
                  Thank you!
                </h3>
                <p>{userEmail}</p>
              </div>
              <div className="step">
                <p>For Buying {params.serviceName}</p>
                <Button
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Back
                </Button>
              </div>
              {/*End step */}
            </div>
          </div>
          {/*End row */}
        </div>
      </div>
    </>
  );
};

export default FinishBooking;
