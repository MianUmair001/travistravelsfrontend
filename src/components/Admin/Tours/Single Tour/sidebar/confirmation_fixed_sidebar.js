import React from "react";

const Confirmation_fixed_sidebar = () => {
  return (
    <>
      <main>
        
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
                  <thead>
                    <tr>
                      <th colSpan={2}>Item 1</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Louvre musuem tickets</strong>
                      </td>
                      <td>2x</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date</strong>
                      </td>
                      <td>25 Febraury 2015</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>To</strong>
                      </td>
                      <td>Jhon Doe</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Payment type</strong>
                      </td>
                      <td>Credit card</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-striped confirm">
                  <thead>
                    <tr>
                      <th colSpan={2}>Item 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Senna river tour</strong>
                      </td>
                      <td>2x</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date</strong>
                      </td>
                      <td>27 Febraury 2015</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>To</strong>
                      </td>
                      <td>Jhon Doe</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Payment type</strong>
                      </td>
                      <td>Credit card</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*End step */}
            </div>
            {/*End col */}
            <aside className="col-lg-4" id="sidebar">
              <div className="theiaStickySidebar">
                <div className="box_style_1" id="booking_box">
                  <h3 className="inner">Thank you!</h3>
                  <p>
                    Nihil inimicus ex nam, in ipsum dignissim duo. Tale
                    principes interpretaris vim ei, has posidonium definitiones
                    ut. Duis harum fuisset ut his, duo an dolor epicuri
                    appareat.
                  </p>
                  <hr />
                  <a
                    className="btn_full_outline"
                    href="invoice.html"
                    target="_blank"
                  >
                    View your invoice
                  </a>
                </div>
              </div>
              {/*End sticky */}
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

export default Confirmation_fixed_sidebar;
