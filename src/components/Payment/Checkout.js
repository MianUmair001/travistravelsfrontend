import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  StripeProvider,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";

const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();
  const profile = useSelector((state) => state.profile);
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [price, setPrice] = useState();
  setName(profile.name);
  setUser(profile.auth);
  setPrice(100);
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
          name,
          price,
          paymentMethodId: id,
          user,
        });
        console.log("I am Response", response);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2>Price: $10.99 USD</h2>
      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51I4t9UJWmS3lWIpGWYT2GaiHGMQ7K7kFYuPw5JtGNDJGAmlvgYIn96bUjyKNtnIModcfABUYxUK3GZKuITDxHV5m00wSepdVYZ"
);

const Checkout = () => {
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default Checkout;
