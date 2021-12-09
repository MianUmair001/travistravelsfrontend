import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

const BookingForm = ({
  serviceName,
  bookedServiceId,
  bookedServiceType,
  price,
}) => {
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adultsQuantity, setAdultsQuantity] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  //   const params = location.state;
  //   const serviceName = params.servicename;
  //   const bookedServiceId = params.bookedServiceId;
  //   const bookedServiceType = params.bookedServiceType;
  //   const price = params.price;
  const handleBookClick = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/create_bookings/${bookedServiceId}`,
      state: {
        adultsQuantity,
        childrenQuantity,
        date,
        time,
        price: (Number(adultsQuantity) + Number(childrenQuantity)) * price,
        serviceName: serviceName,
        serviceId: bookedServiceId,
        bookedServiceType: bookedServiceType,
        bookedServiceId: bookedServiceId,
        user: user,
      },
    });
  };

  return (
    <div>
      <div className="box_style_1 expose">
        <h3 className="inner">- Booking -</h3>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>
                <i className="icon-calendar-7" /> Select a date
              </label>
              <input
                className="date-pick form-control"
                data-date-format="M d, D"
                type="text"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>
                <i className=" icon-clock" /> Time
              </label>
              <input
                className="time-pick form-control"
                type="text"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Adults</label>
              <div className="numbers-row">
                <input
                  type="number"
                  id="adults"
                  className="qty2 form-control"
                  name="quantity"
                  value={adultsQuantity}
                  onChange={(e) => setAdultsQuantity(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Children</label>
              <div className="numbers-row">
                <input
                  type="number"
                  id="children"
                  className="qty2 form-control"
                  name="quantity"
                  value={childrenQuantity}
                  onChange={(e) => setChildrenQuantity(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <table className="table table_summary">
          <tbody>
            <tr>
              <td>Adults</td>
              <td className="text-right">{adultsQuantity}</td>
            </tr>
            <tr>
              <td>Children</td>
              <td className="text-right">{childrenQuantity}</td>
            </tr>
            <tr>
              <td>Total amount</td>
              <td className="text-right">
                {Number(adultsQuantity) + Number(childrenQuantity)}x ${price}
              </td>
            </tr>
            <tr className="total">
              <td>Total cost</td>
              <td className="text-right">
                $ {(Number(adultsQuantity) + Number(childrenQuantity)) * price}
              </td>
            </tr>
          </tbody>
        </table>
        <a className="btn_full" onClick={(e) => handleBookClick(e)}>
          Book now
        </a>
        <a className="btn_full_outline" href="#">
          <i className=" icon-heart" /> Add to whislist
        </a>
      </div>
    </div>
  );
};

export default BookingForm;
