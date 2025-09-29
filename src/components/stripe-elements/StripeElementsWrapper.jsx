import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";

// Replace with your Stripe test publishable key
const stripePromise = loadStripe(
  "pk_test_51SCa2ZFTgdqDaJaqTvvqn5zzbDPQN8z9ga6xLcFvCqCFIn2OXIbUQYXNOgRpPrND1GS2IQHZWddjm33nwdhxKPIY00j5DAdlkp"
);

const StripeElementsWrapper = ({ amount }) => (
  <Elements stripe={stripePromise}>
    <StripeCheckoutForm amount={amount} />
  </Elements>
);

export default StripeElementsWrapper;
