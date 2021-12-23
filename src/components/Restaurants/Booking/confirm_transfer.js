import React from "react";
import { Link } from "react-router-dom";

const Confirm_transfer = () => {
  return (
    <>
      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>Page active</li>
            </ul>
          </div>
        </div>
        {/* End position */}
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
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <p>
                  Lorem ipsum dolor sit amet, nostrud nominati vis ex, essent
                  conceptam eam ad. Cu etiam comprehensam nec. Cibo delicata mei
                  an, eum porro legere no. Te usu decore omnium, quem brute vis
                  at, ius esse officiis legendos cu. Dicunt voluptatum at cum.
                  Vel et facete equidem deterruisset, mei graeco cetero labores
                  et. Accusamus inciderint eu mea.
                </p>
              </div>
              {/*End step */}
              <div className="form_title">
                <h3>
                  <strong>
                    <i className="icon-tag-1" />
                  </strong>
                  Booking summary
                </h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <table className="table table-striped confirm">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Name</strong>
                      </td>
                      <td>Jhon Doe</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Day</strong>
                      </td>
                      <td>10 April 2015</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Time</strong>
                      </td>
                      <td>
                        07.30pm
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Adults</strong>
                      </td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Childs</strong>
                      </td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*End step */}
            </div>
            {/*End col */}
            <aside className="col-lg-4">
              <div className="box_style_1">
                <h3 className="inner">Thank you!</h3>
                <p>
                  Nihil inimicus ex nam, in ipsum dignissim duo. Tale principes
                  interpretaris vim ei, has posidonium definitiones ut. Duis
                  harum fuisset ut his, duo an dolor epicuri appareat.
                </p>
              </div>
              <div className="box_style_4">
                <i className="icon_set_1_icon-89" />
                <h4>
                  Have <span>questions?</span>
                </h4>
                <a href="tel://004542344599" className="phone">
                  +45 423 445 99
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>
          </div>
          {/*End row */}
        </div>
        {/*End container */}
      </main>
      {/* End main */}
    </>
  );
};

export default Confirm_transfer;
