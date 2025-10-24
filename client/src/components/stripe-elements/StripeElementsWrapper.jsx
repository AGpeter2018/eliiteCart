import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";


// Replace with your Stripe test publishable key
const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY
);
console.log("Stripe Publishable Key:", process.env.STRIPE_PUBLISHABLE_KEY);

const StripeElementsWrapper = ({ amount }) => (
  <Elements stripe={stripePromise}>
    <StripeCheckoutForm amount={amount} />
  </Elements>
);

export default StripeElementsWrapper;
