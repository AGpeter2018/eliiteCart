  import React from "react";
  import { Elements } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  import StripeCheckoutForm from "./StripeCheckoutForm";


  // Replace with your Stripe test publishable key
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const StripeElementsWrapper = ({ amount }) => (
    <Elements stripe={stripePromise}>
      <StripeCheckoutForm amount={amount} />
    </Elements>
  );

  export default StripeElementsWrapper;
