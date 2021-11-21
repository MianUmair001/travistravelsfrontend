import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./Styles/styles.css";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const cardNumberElement = elements.create("cardNumber");
  const cardExpiryElement = elements.create("cardExpiry");
  const cardCvcElement = elements.create("cardCvc");
  cardNumberElement.mount("#card-number");
  cardExpiryElement.mount("#card-expiry");
  cardCvcElement.mount("#card-cvc");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const data = await stripe.confirmCardPayment("<%= client Secret %>", {
      payment_method: {
        card: cardNumberElement,
      },
    });
    console.log(data);
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });

    // if (!error) {
    //   try {
    //     const { id } = paymentMethod;
    //     const response = await axios.post("http://localhost:3000/api/payment", {
    //       amount: 1000,
    //       id,
    //     });
    //     console.log("I am Response", response);
    //     if (response.success) {
    //       console.log("Successfull payment");
    //       setSuccess(true);
    //     }
    //   } catch (error) {
    //     console.log("Error: ", error);
    //   }
    // } else {
    //   console.log(error.message);
    // }
  };
  return (
    <>
      <br />
      <br />
      <br />
      {/* {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset
            style={{ width: "100%", height: "50px" }}
            className="FormGroup"
          >
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of you're life
          </h2>
        </div>
      )} */}
      <div id="card-number"></div>
      <div id="card-expiry"></div>
      <div id="card-cvc"></div>
      <button id="submit" onClick={(e)=>handleSubmit(e)}>Pay</button>
    </>
  );
};

export default PaymentForm;
