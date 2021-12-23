import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLICKEY =
  "pk_test_51I4t9UJWmS3lWIpGWYT2GaiHGMQ7K7kFYuPw5JtGNDJGAmlvgYIn96bUjyKNtnIModcfABUYxUK3GZKuITDxHV5m00wSepdVYZ";
const stripeTestPromise = loadStripe(PUBLICKEY);
const appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#0570de",
    colorBackground: "#ffffff",
    colorText: "#30313d",
    colorDanger: "#df1b41",
    fontFamily: "Ideal Sans, system-ui, sans-serif",
    spacingUnit: "2px",
    borderRadius: "4px",
    // See all possible variables below
  },
};
const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise} appearance={appearance}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
