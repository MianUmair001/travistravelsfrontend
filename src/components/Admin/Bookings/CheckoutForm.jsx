import { Button } from "@material-ui/core";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import FinishBooking from "./FinishBooking";
const CheckoutForm = ({
  serviceName,
  firstName,
  lastName,
  email,
  phone,
  price,
  adultsQuantity,
  childrenQuantity,
  bookedServiceType,
  bookedServiceId,
}) => {
  const user = useSelector((state) => state.auth.user);
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      card: elements.getElement(CardExpiryElement),
      card: elements.getElement(CardCvcElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const response = await axios.post("http://localhost:3000/api/payment", {
          name: serviceName,
          price: price,
          paymentMethodId: id,
          user: user,
          paymentIntentId: "exaamplePaymentId",
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
        });
        const bookingresponse = await axios.post(
          "http://localhost:3000/api/booking",
          {
            type: "self",
            title: serviceName,
            bookingDate: "11/28/2021",
            noOfAdults: Number(adultsQuantity),
            noOfChildren: Number(childrenQuantity),
            bookedServiceType: bookedServiceType,
            bookedService: bookedServiceId,
            user:user
          }
        );

        console.log("I am Response", response, bookingresponse);
        setSuccess(true);
        if (response.status === 201 && bookingresponse.status === 201) {
          console.log("I am in If Check O Yeah");
          history.push({
            pathname: "/finishBooking",
            state: {
              serviceName,
            },
          });
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };
  return (
    <>
      <div className="step">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Card number</label>
              <CardNumberElement
                id="card_number"
                name="card_number"
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-sm-12"></div>
            <img
              src="img/cards.png"
              width={207}
              height={43}
              alt="Cards"
              className="cards"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Expiration date</label>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <CardExpiryElement
                    id="expire_month"
                    name="expire_month"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Security code</label>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <CardCvcElement
                      id="ccv"
                      name="ccv"
                      className="form-control"
                      placeholder="CCV"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <img
                    src="img/icon_ccv.gif"
                    width={50}
                    height={29}
                    alt="ccv"
                  />
                  <small>Last 3 digits</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End row */}

        <Button
          className="btn_map"
          data-toggle="collapse"
          href="#collapseMap"
          aria-expanded="false"
          aria-controls="collapseMap"
          data-text-swap="Hide map"
          data-text-original="View on map"
          onClick={(e) => handleSubmit(e)}
        >
          Book Now
        </Button>
      </div>
    </>
  );
};
export default CheckoutForm;
