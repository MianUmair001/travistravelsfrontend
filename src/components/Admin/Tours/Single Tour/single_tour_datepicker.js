import React from 'react'

const Single_tour_datepicker = () => {
    return (
        <>
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
        <div className="collapse" id="collapseMap">
          <div id="map" className="map" />
        </div>
        {/* End Map */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8" id="single_tour_desc">
              <div id="single_tour_feat">
                <ul>
                  <li><i className="icon_set_1_icon-4" />Museum</li>
                  <li><i className="icon_set_1_icon-83" />3 Hours</li>
                  <li><i className="icon_set_1_icon-13" />Accessibiliy</li>
                  <li><i className="icon_set_1_icon-82" />144 Likes</li>
                  <li><i className="icon_set_1_icon-22" />Pet allowed</li>
                  <li><i className="icon_set_1_icon-97" />Audio guide</li>
                  <li><i className="icon_set_1_icon-29" />Tour guide</li>
                </ul>
              </div>
              <p className="d-none d-md-block d-block d-lg-none"><a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a></p>
              {/* Map button for tablets/mobiles */}
              <div id="Img_carousel" className="slider-pro">
                <div className="sp-slides">
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/1_medium.jpg" data-small="img/slider_single_tour/1_small.jpg" data-medium="img/slider_single_tour/1_medium.jpg" data-large="img/slider_single_tour/1_large.jpg" data-retina="img/slider_single_tour/1_large.jpg" />
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/2_medium.jpg" data-small="img/slider_single_tour/2_small.jpg" data-medium="img/slider_single_tour/2_medium.jpg" data-large="img/slider_single_tour/2_large.jpg" data-retina="img/slider_single_tour/2_large.jpg" />
                    <h3 className="sp-layer sp-black sp-padding" data-horizontal={40} data-vertical={40} data-show-transition="left">
                      Lorem ipsum dolor sit amet </h3>
                    <p className="sp-layer sp-white sp-padding" data-horizontal={40} data-vertical={100} data-show-transition="left" data-show-delay={200}>
                      consectetur adipisicing elit
                    </p>
                    <p className="sp-layer sp-black sp-padding" data-horizontal={40} data-vertical={160} data-width={350} data-show-transition="left" data-show-delay={400}>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/3_medium.jpg" data-small="img/slider_single_tour/3_small.jpg" data-medium="img/slider_single_tour/3_medium.jpg" data-large="img/slider_single_tour/3_large.jpg" data-retina="img/slider_single_tour/3_large.jpg" />
                    <p className="sp-layer sp-white sp-padding" data-position="centerCenter" data-vertical={-50} data-show-transition="right" data-show-delay={500}>
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="sp-layer sp-black sp-padding" data-position="centerCenter" data-vertical={50} data-show-transition="left" data-show-delay={700}>
                      consectetur adipisicing elit
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/4_medium.jpg" data-small="img/slider_single_tour/4_small.jpg" data-medium="img/slider_single_tour/4_medium.jpg" data-large="img/slider_single_tour/4_large.jpg" data-retina="img/slider_single_tour/4_large.jpg" />
                    <p className="sp-layer sp-black sp-padding" data-position="bottomLeft" data-vertical={0} data-width="100%" data-show-transition="up">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/5_medium.jpg" data-small="img/slider_single_tour/5_small.jpg" data-medium="img/slider_single_tour/5_medium.jpg" data-large="img/slider_single_tour/5_large.jpg" data-retina="img/slider_single_tour/5_large.jpg" />
                    <p className="sp-layer sp-white sp-padding" data-vertical="5%" data-horizontal="5%" data-width="90%" data-show-transition="down" data-show-delay={400}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/6_medium.jpg" data-small="img/slider_single_tour/6_small.jpg" data-medium="img/slider_single_tour/6_medium.jpg" data-large="img/slider_single_tour/6_large.jpg" data-retina="img/slider_single_tour/6_large.jpg" />
                    <p className="sp-layer sp-white sp-padding" data-horizontal={10} data-vertical={10} data-width={300}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/7_medium.jpg" data-small="img/slider_single_tour/7_small.jpg" data-medium="img/slider_single_tour/7_medium.jpg" data-large="img/slider_single_tour/7_large.jpg" data-retina="img/slider_single_tour/7_large.jpg" />
                    <p className="sp-layer sp-black sp-padding" data-position="bottomLeft" data-horizontal="5%" data-vertical="5%" data-width="90%" data-show-transition="up" data-show-delay={400}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/8_medium.jpg" data-small="img/slider_single_tour/8_small.jpg" data-medium="img/slider_single_tour/8_medium.jpg" data-large="img/slider_single_tour/8_large.jpg" data-retina="img/slider_single_tour/8_large.jpg" />
                    <p className="sp-layer sp-black sp-padding" data-horizontal={50} data-vertical={50} data-show-transition="down" data-show-delay={500}>
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="sp-layer sp-white sp-padding" data-horizontal={50} data-vertical={100} data-show-transition="up" data-show-delay={500}>
                      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="sp-slide">
                    <img alt="Image" className="sp-image" src="css/images/blank.gif" data-src="img/slider_single_tour/9_medium.jpg" data-small="img/slider_single_tour/9_small.jpg" data-medium="img/slider_single_tour/9_medium.jpg" data-large="img/slider_single_tour/9_large.jpg" data-retina="img/slider_single_tour/9_large.jpg" />
                  </div>
                </div>
                <div className="sp-thumbnails">
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/1_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/2_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/3_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/4_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/5_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/6_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/7_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/8_medium.jpg" />
                  <img alt="Image" className="sp-thumbnail" src="img/slider_single_tour/9_medium.jpg" />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Description</h3>
                </div>
                <div className="col-lg-9">
                  <h4>Paris in love</h4>
                  <p>
                    Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.
                  </p>
                  <h4>What's include</h4>
                  <p>
                    Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list_ok">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                        <li>Ut est saepe munere ceteros</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list_ok">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                        <li>No scripta electram necessitatibus sit</li>
                      </ul>
                    </div>
                  </div>
                  {/* End row  */}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Schedule</h3>
                </div>
                <div className="col-lg-9">
                  <div className=" table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan={2}>
                            1st March to 31st October
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Monday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Tuesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Wednesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Thursday
                          </td>
                          <td>
                            <span className="label label-danger">Closed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Friday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Saturday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Sunday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong><em>Last Admission</em></strong>
                          </td>
                          <td>
                            <strong>17.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan={2}>
                            1st November to 28th February
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Monday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Tuesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Wednesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Thursday
                          </td>
                          <td>
                            <span className="label label-danger">Closed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Friday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Saturday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Sunday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong><em>Last Admission</em></strong>
                          </td>
                          <td>
                            <strong>17.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Reviews </h3>
                  <a href="#" className="btn_1 add_bottom_30" data-toggle="modal" data-target="#myReview">Leave a review</a>
                </div>
                <div className="col-lg-9">
                  <div id="general_rating">11 Reviews
                    <div className="rating">
                      <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" /><i className="icon-smile" />
                    </div>
                  </div>
                  {/* End general_rating */}
                  <div className="row" id="rating_summary">
                    <div className="col-md-6">
                      <ul>
                        <li>Position
                          <div className="rating">
                            <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" /><i className="icon-smile" />
                          </div>
                        </li>
                        <li>Tourist guide
                          <div className="rating">
                            <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Price
                          <div className="rating">
                            <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" /><i className="icon-smile" />
                          </div>
                        </li>
                        <li>Quality
                          <div className="rating">
                            <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End row */}
                  <hr />
                  <div className="review_strip_single">
                    <img src="img/avatar1.jpg" alt="Image" className="rounded-circle" />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" /><i className="icon-smile" />
                    </div>
                  </div>
                  {/* End review strip */}
                  <div className="review_strip_single">
                    <img src="img/avatar3.jpg" alt="Image" className="rounded-circle" />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" /><i className="icon-smile" />
                    </div>
                  </div>
                  {/* End review strip */}
                  <div className="review_strip_single last">
                    <img src="img/avatar2.jpg" alt="Image" className="rounded-circle" />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile voted" /><i className="icon-smile" /><i className="icon-smile" />
                    </div>
                  </div>
                  {/* End review strip */}
                </div>
              </div>
            </div>
            {/*End  single_tour_desc*/}
            <aside className="col-lg-4">
              <p className="d-none d-xl-block d-lg-block d-xl-none">
                <a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
              </p>
              <div className="box_style_1 expose">
                <h3 className="inner">- Booking -</h3>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label><i className="icon-calendar-7" /> Select a date</label>
                      <input className="form-control booking_date" id="bookingdate" type="text" data-lang="en" data-min-year={2017} data-max-year={2020} data-disabled-days="11/17/2017,12/17/2017" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label><i className=" icon-clock" /> Time</label>
                      <input className="form-control booking_time" id="bookingtime" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Adults</label>
                      <div className="numbers-row">
                        <input type="text" defaultValue={1} id="adults" className="qty2 form-control" name="quantity" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Children</label>
                      <div className="numbers-row">
                        <input type="text" defaultValue={0} id="children" className="qty2 form-control" name="quantity" />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <table className="table table_summary">
                  <tbody>
                    <tr>
                      <td>
                        Adults
                      </td>
                      <td className="text-right">
                        2
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Children
                      </td>
                      <td className="text-right">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Total amount
                      </td>
                      <td className="text-right">
                        3x $52
                      </td>
                    </tr>
                    <tr className="total">
                      <td>
                        Total cost
                      </td>
                      <td className="text-right">
                        $154
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a className="btn_full" href="cart.html">Book now</a>
                <a className="btn_full_outline" href="#"><i className=" icon-heart" /> Add to whislist</a>
              </div>
              {/*/box_style_1 */}
              <div className="box_style_4">
                <i className="icon_set_1_icon-90" />
                <h4><span>Book</span> by phone</h4>
                <a href="tel://004542344599" className="phone">+45 423 445 99</a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>
          </div>
          {/*End row */}
        </div>
        {/*End container */}
        <div id="overlay" />
        {/* Mask on input focus */}
      </main>
      {/* End main */} 
        </>
    )
}

export default Single_tour_datepicker
