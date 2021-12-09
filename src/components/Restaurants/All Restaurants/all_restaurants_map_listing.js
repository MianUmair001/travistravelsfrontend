import React from "react";

const All_restaurants_map_listing = () => {
  return (
    <>
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-7 content-left">
            <div className="row">
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_1.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-2" /> Fast food
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>King Food</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('Fastfood', 0)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_2.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-2" /> Fast food
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Catrine</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('Fastfood', 1)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
            </div>
            {/* End row */}
            <div className="row">
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_3.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-1" /> Pizza /
                        Italian
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Bella Napoli</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('Pizza', 0)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3">
                    <span>Top rated</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_4.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-4" /> Chinese
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Dragon tower</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('Chinese', 0)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
            </div>
            {/* End row */}
            <div className="row">
              <div className="col-sm-6">
                <div className="ribbon_3">
                  <span>Top rated</span>
                </div>
                <div className="tour_container">
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_5.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-7" /> Fish
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Seafood</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('Fish', 0)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3">
                    <span>Top rated</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_6.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-5" /> International
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Alfredo</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('International', 0)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
            </div>
            {/* End row */}
            <div className="row">
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3">
                    <span>Top rated</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_7.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-5" /> International
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Madlene Bar</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('International', 1)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
              <div className="col-sm-6">
                <div className="tour_container">
                  <div className="ribbon_3">
                    <span>Top rated</span>
                  </div>
                  <div className="img_container">
                    <a href="single_restaurant.html">
                      <img
                        src="img/restaurant_box_8.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="short_info">
                        <i className="icon_set_3_restaurant-5" /> International
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="tour_title">
                    <h3>
                      <strong>Spago Bistrot</strong>
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
                          <span className="tooltip-back">Add to wishlist</span>
                        </span>
                      </a>
                    </div>
                    {/* End wish list*/}
                    <div
                      onclick="onHtmlClick('International', 2)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box tour */}
              </div>
              {/* End col */}
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
          {/* end col*/}
          <div className="col-lg-5 map-right">
            <div className="map" id="map" />
          </div>
        </div>
        {/* End row*/}
      </div>
      {/* End container-fluid */}
    </>
  );
};

export default All_restaurants_map_listing;
