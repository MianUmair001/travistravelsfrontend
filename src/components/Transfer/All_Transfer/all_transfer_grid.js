import React from "react";
import { Link } from "react-router-dom";

const All_transfer_grid = () => {
  return (
    <>
      <div>
        <section
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="img/transfer_top.jpg"
          data-natural-width={1400}
          data-natural-height={470}
        >
          <div className="parallax-content-1">
            <div className="animated fadeInDown">
              <h1>Pakistan Transports</h1>
              <p>Get the best Cars and Vehicle for your Tours</p>
            </div>
          </div>
        </section>
        {/* End section */}
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
          </div>
          {/* Position */}
          <div className="collapse" id="collapseMap">
            <div id="map" className="map" />
          </div>
          {/* End Map */}
          <div className="container margin_60">
            <div className="row">
              <aside className="col-lg-3">
                <div id="filters_col">
                  <a
                    data-toggle="collapse"
                    href="#collapseFilters"
                    aria-expanded="false"
                    aria-controls="collapseFilters"
                    id="filters_col_bt"
                  >
                    <i className="icon_set_1_icon-65" />
                    Filters
                  </a>
                  <div className="collapse show" id="collapseFilters">
                    <div className="filter_type">
                      <h6>Price</h6>
                      <input type="text" id="range" name="range" defaultValue />
                    </div>
                    <div className="filter_type">
                      <h6>Rating</h6>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            <span className="rating">
                              <i className="icon-smile voted" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                              <i className="icon-smile" />
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="filter_type">
                      <h6>Facility</h6>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Pet allowed
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Groups allowed
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Tour guides
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            Access for disabled
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End collapse */}
                </div>
                {/*End filters col*/}
                <div className="box_style_2">
                  <i className="icon_set_1_icon-57" />
                  <h4>
                    Need <span>Help?</span>
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +45 423 445 99
                  </a>
                  <small>Monday to Friday 9.00am - 7.30pm</small>
                </div>
              </aside>
              {/*End aside */}
              <div className="col-lg-9">
                <div id="tools">
                  <div className="row">
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_price" id="sort_price">
                          <option value selected>
                            Sort by price
                          </option>
                          <option value="lower">Lowest price</option>
                          <option value="higher">Highest price</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="styled-select-filters">
                        <select name="sort_rating" id="sort_rating">
                          <option value selected>
                            Sort by ranking
                          </option>
                          <option value="lower">Lowest ranking</option>
                          <option value="higher">Highest ranking</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-4 d-none d-sm-block text-right">
                      <Link to="/all_transfer_grid" className="bt_filters">
                        <i className="icon-th" />
                      </Link>{" "}
                      <Link to="/all_transfer_list" className="bt_filters">
                        <i className=" icon-list" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*End tools */}
                <div className="row">
                  <div className="col-md-6 wow zoomIn" data-wow-delay="0.1s">
                    <div className="transfer_container">
                      <div className="ribbon_3 popular">
                        <span>Popular</span>
                      </div>
                      <div className="img_container">
                        <a href="single_transfer.html">
                          <img
                            src="img/transfer_2.jpg"
                            width={800}
                            height={533}
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="short_info">
                            From/Per person
                            <span className="price">
                              <sup>$</sup>29
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="transfer_title">
                        <h3>
                          <strong>Orly Airport</strong> shared
                        </h3>
                        <div className="rating">
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile" />
                          <small>(75)</small>
                        </div>
                        {/* end rating */}
                        <div className="wishlist">
                          <a className="tooltip_flip tooltip-effect-1" href="#">
                            +
                            <span className="tooltip-content-flip">
                              <span className="tooltip-back">
                                Add to wishlist
                              </span>
                            </span>
                          </a>
                        </div>
                        {/* End wish list*/}
                      </div>
                    </div>
                    {/* End box tour */}
                  </div>
                  {/* End col-md-6 */}
                  <div className="col-md-6 wow zoomIn" data-wow-delay="0.2s">
                    <div className="transfer_container">
                      <div className="ribbon_3 popular">
                        <span>Popular</span>
                      </div>
                      <div className="img_container">
                        <a href="single_transfer.html">
                          <img
                            src="img/transfer_1.jpg"
                            width={800}
                            height={533}
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="short_info">
                            From/Per person
                            <span className="price">
                              <sup>$</sup>45
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="transfer_title">
                        <h3>
                          <strong>Orly Airport</strong> private
                        </h3>
                        <div className="rating">
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile" />
                          <small>(75)</small>
                        </div>
                        {/* end rating */}
                        <div className="wishlist">
                          <a className="tooltip_flip tooltip-effect-1" href="#">
                            +
                            <span className="tooltip-content-flip">
                              <span className="tooltip-back">
                                Add to wishlist
                              </span>
                            </span>
                          </a>
                        </div>
                        {/* End wish list*/}
                      </div>
                    </div>
                    {/* End box tour */}
                  </div>
                  {/* End col-md-6 */}
                </div>
                {/* End row */}
                <div className="row">
                  <div className="col-md-6 wow zoomIn" data-wow-delay="0.2s">
                    <div className="transfer_container">
                      <div className="ribbon_3 popular">
                        <span>Popular</span>
                      </div>
                      <div className="img_container">
                        <a href="single_transfer.html">
                          <img
                            src="img/transfer_3.jpg"
                            width={800}
                            height={533}
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="short_info">
                            From/Per person
                            <span className="price">
                              <sup>$</sup>39
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="transfer_title">
                        <h3>
                          <strong>Orly Airport</strong> group
                        </h3>
                        <div className="rating">
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile" />
                          <small>(75)</small>
                        </div>
                        {/* end rating */}
                        <div className="wishlist">
                          <a className="tooltip_flip tooltip-effect-1" href="#">
                            +
                            <span className="tooltip-content-flip">
                              <span className="tooltip-back">
                                Add to wishlist
                              </span>
                            </span>
                          </a>
                        </div>
                        {/* End wish list*/}
                      </div>
                    </div>
                    {/* End box tour */}
                  </div>
                  {/* End col-md-6 */}
                  <div className="col-md-6 wow zoomIn" data-wow-delay="0.4s">
                    <div className="transfer_container">
                      <div className="ribbon_3">
                        <span>Top rated</span>
                      </div>
                      <div className="img_container">
                        <a href="single_transfer.html">
                          <img
                            src="img/transfer_4.jpg"
                            width={800}
                            height={533}
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="short_info">
                            From/Per person
                            <span className="price">
                              <sup>$</sup>45
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="transfer_title">
                        <h3>
                          <strong>Disneyland</strong> transfer
                        </h3>
                        <div className="rating">
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile voted" />
                          <i className="icon-smile" />
                          <small>(75)</small>
                        </div>
                        {/* end rating */}
                        <div className="wishlist">
                          <a
                            className="tooltip_flip tooltip-effect-1"
                            href="javascript:void(0);"
                          >
                            +
                            <span className="tooltip-content-flip">
                              <span className="tooltip-back">
                                Add to wishlist
                              </span>
                            </span>
                          </a>
                        </div>
                        {/* End wish list*/}
                      </div>
                    </div>
                    {/* End box tour */}
                  </div>
                  {/* End col-md-6 */}
                </div>
                {/* End row */}
                <hr />
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">
                        1<span className="sr-only">(current)</span>
                      </span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* end pagination*/}
              </div>
              {/* End col lg 9 */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </main>
        {/* End main */}
      </div>
    </>
  );
};
export default All_transfer_grid;
