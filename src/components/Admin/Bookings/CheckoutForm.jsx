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
const CheckoutForm = ({ price }) => {
  const [user, setUser] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();

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
          name: "MuhammadUmair",
          price: 1000,
          paymentMethodId: id,
          user: "614b2a355f68b52ee88d7500",
        });
        console.log("I am Response", response);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="step">
        <div className="form_title">
          <h3>
            <strong>2</strong>Payment Information
          </h3>
          <p>Mussum ipsum cacilds, vidis litro abertis.</p>
        </div>
      </div>

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
                <img src="img/icon_ccv.gif" width={50} height={29} alt="ccv" />
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
    </>
  );
};
export default CheckoutForm;
