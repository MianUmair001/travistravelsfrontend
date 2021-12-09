import React from "react";

const All_hotels_map_listing = () => {
  return (
    <>
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-7 content-left">
            <div className="row">
              <div className="col-sm-6">
                <div className="hotel_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src="img/hotel_1.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="score">
                        <span>7.5</span>Good
                      </div>
                      <div className="short_info hotel">
                        From/Per night
                        <span className="price">
                          <sup>$</sup>59
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="hotel_title">
                    <h3>
                      <strong>Park Hyatt</strong> Hotel
                    </h3>
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star-empty" />
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
                      onclick="onHtmlClick('Hotels', 0)"
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
                <div className="hotel_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src="img/hotel_2.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="score">
                        <span>9.0</span>Superb
                      </div>
                      <div className="short_info hotel">
                        From/Per night
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="hotel_title">
                    <h3>
                      <strong>Mariott</strong> Hotel
                    </h3>
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star-empty" />
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
                      onclick="onHtmlClick('Hotels', 1)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box */}
              </div>
              {/* End col */}
            </div>
            {/* End row */}
            <div className="row">
              <div className="col-sm-6">
                <div className="hotel_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src="img/hotel_3.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="score">
                        <span>9.5</span>Superb
                      </div>
                      <div className="short_info hotel">
                        From/Per night
                        <span className="price">
                          <sup>$</sup>39
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="hotel_title">
                    <h3>
                      <strong>Lumiere</strong> Hotel
                    </h3>
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star-empty" />
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
                      onclick="onHtmlClick('Hotels', 2)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box */}
              </div>
              {/* End col */}
              <div className="col-sm-6">
                <div className="hotel_container">
                  <div className="ribbon_3 popular">
                    <span>Popular</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src="img/hotel_4.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="score">
                        <span>7.5</span>Good
                      </div>
                      <div className="short_info hotel">
                        From/Per night
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="hotel_title">
                    <h3>
                      <strong>Concorde</strong> Hotel
                    </h3>
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star-empty" />
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
                      onclick="onHtmlClick('Hotels', 3)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box */}
              </div>
              {/* End col */}
            </div>
            {/* End row */}
            <div className="row">
              <div className="col-sm-6">
                <div className="hotel_container">
                  <div className="ribbon_3">
                    <span>Top rated</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src="img/hotel_5.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="score">
                        <span>8.0</span>Good
                      </div>
                      <div className="short_info hotel">
                        From/Per night
                        <span className="price">
                          <sup>$</sup>39
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="hotel_title">
                    <h3>
                      <strong>Louvre</strong> Hotel
                    </h3>
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star-empty" />
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
                      onclick="onHtmlClick('Hotels', 4)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box */}
              </div>
              {/* End col */}
              <div className="col-sm-6">
                <div className="hotel_container">
                  <div className="ribbon_3">
                    <span>Top rated</span>
                  </div>
                  <div className="img_container">
                    <a href="single_hotel.html">
                      <img
                        src="img/hotel_6.jpg"
                        width={800}
                        height={533}
                        className="img-fluid"
                        alt="Image"
                      />
                      <div className="score">
                        <span>8.5</span>Superb
                      </div>
                      <div className="short_info hotel">
                        From/Per night
                        <span className="price">
                          <sup>$</sup>45
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="hotel_title">
                    <h3>
                      <strong>Concorde</strong> Hotel
                    </h3>
                    <div className="rating">
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star voted" />
                      <i className="icon-star-empty" />
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
                      onclick="onHtmlClick('Hotels', 5)"
                      className="view_on_map"
                    >
                      View on map
                    </div>
                  </div>
                </div>
                {/* End box */}
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
          {/* end col */}
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

export default All_hotels_map_listing;
