import React from 'react'

const Single_tour_working_booking = () => {
    return (
        <>
        <main>
        
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
              {/* End row  */}
              <hr />
              <div className="row">
                <div className="col-lg-3">
                  <h3>Schedule</h3>
                </div>
                <div className="col-lg-9">
                  <div className="table-responsive">
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
                {/*?php if (!count($_POST)){ ?*/}
                <form id="booking" action="<?php echo $_server['php_self']; ?>" method="post">
                  <h3 className="inner">- Booking -</h3>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input className="form-control required" name="name_booking" id="name_booking" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last name</label>
                        <input className="form-control required" name="last_name_booking" id="last_name_booking" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control required" type="email" name="email_booking" id="email_booking" />
                  </div>
                  <div className="form-group">
                    <label>Telephone</label>
                    <input className="form-control required" type="text" name="phone_booking" id="phone_booking" />
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label><i className="icon-calendar-7" /> Select a date</label>
                        <input className="date-pick form-control required" type="text" name="date_booking" id="date_booking" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label><i className=" icon-clock" /> Time</label>
                        <input className="time-pick form-control required" type="text" name="time_booking" id="time_booking" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>Adults</label>
                        <div className="numbers-row">
                          <input type="text" defaultValue={1} id="adults" className="qty2 form-control" name="adults" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>Children</label>
                        <div className="numbers-row">
                          <input type="text" defaultValue={0} id="children" className="qty2 form-control " name="children" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped options_booking">
                    <thead>
                      <tr>
                        <th colSpan={3}>
                          Add options / Services
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="6%">
                          <i className="icon_set_1_icon-16" />
                        </td>
                        <td width="59%">
                          Tour guide <strong>+$34</strong>
                        </td>
                        <td width="35%">
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_1" id="option_1" defaultChecked defaultValue="Yes" />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon_set_1_icon-26" />
                        </td>
                        <td>
                          Pick up service <strong>+$34*</strong>
                        </td>
                        <td>
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_2" id="option_2" defaultValue="Yes" />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon_set_1_icon-71" />
                        </td>
                        <td>
                          Insurance <strong>+$24*</strong>
                        </td>
                        <td>
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_3" id="option_3" defaultValue="Yes" defaultChecked />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon_set_1_icon-15" />
                        </td>
                        <td>
                          Welcome bottle <strong>+$24</strong>
                        </td>
                        <td>
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_4" id="option_4" defaultValue="Yes" />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon_set_1_icon-59" />
                        </td>
                        <td>
                          Coffe break <strong>+$12*</strong>
                        </td>
                        <td>
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_5" id="option_5" defaultValue="Yes" />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon_set_1_icon-58" />
                        </td>
                        <td>
                          Dinner <strong>+$26*</strong>
                        </td>
                        <td>
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_6" id="option_6" defaultValue="Yes" />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon_set_1_icon-40" />
                        </td>
                        <td>
                          Bike rent <strong>+$26*</strong>
                        </td>
                        <td>
                          <label className="switch-light switch-ios pull-right">
                            <input type="checkbox" name="option_7" id="option_7" defaultValue="Yes" />
                            <span>
                              <span>No</span>
                              <span>Yes</span>
                            </span>
                            <a />
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <small>* Prices for person.</small>
                  </p>
                  <button type="submit" className="btn_full">Book now</button>
                </form>
                {/*?php }else{ ?*/}
                {/* START SEND MAIL SCRIPT */}
                <div className="text-center">
                  <p><i className="icon-ok-circled" style={{fontSize: '75px', color: '#83c99f'}} />
                  </p>
                  <p><strong>Request Successfully Sent!</strong>
                    <br /> We will contact you shortly to confirm your request!</p>
                </div>
                {/*?php
							$mail = $_POST['email_booking'];

							$to = "test@domain.com";	/*YOUR EMAIL HERE* /
							$subject = "Request From TravisTravels";
							$headers = "From: TravisTravels <noreply@yourdomain.com*/}";
                $message = "YOUR BOOKING for Louvre Museum Tour\n";
                $message .= "\nName: " . $_POST['name_booking'];
                $message .= "\nLast name: " . $_POST['last_name_booking'];
                $message .= "\nEmail: " . $_POST['email_booking'];
                $message .= "\nTelephone number: " . $_POST['phone_booking'];
                $message .= "\nDate booking: " . $_POST['date_booking'];
                $message .= "\nTime booking: " . $_POST['time_booking'];
                $message .= "\nAdults: " . $_POST['adults'];
                $message .= "\nChildren: " . $_POST['children'];
                $message .= "\nTour guide: " . $_POST['option_1'];
                $message .= "\nPick up service: " . $_POST['option_2'];
                $message .= "\nInsurance: " . $_POST['option_3'];
                $message .= "\nWelcome bottle: " . $_POST['option_4'];
                $message .= "\nCoffe break: " . $_POST['option_5'];
                $message .= "\nDinner: " . $_POST['option_6'];
                $message .= "\nBike rent: " . $_POST['option_6'];
                //Receive Variable
                $sentOk = mail($to,$subject,$message,$headers);
                //Confirmation page
                $user = "$mail";
                $usersubject = "Thank You - Booking summary from TravisTravels";
                $userheaders = "From: info@TravisTravels.com\n";
                //Confirmation page WITH  SUMMARY
                $usermessage = "Thank you for your time, request successfully sent!.\nWe will contact you shortly to confirm your request!\n\n$message"; 
                mail($user,$usersubject,$usermessage,$userheaders);
                {'}'}
                ?&gt;
                {/* END SEND MAIL SCRIPT */}
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

export default Single_tour_working_booking
