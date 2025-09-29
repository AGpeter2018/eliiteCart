import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeCheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);
    setSuccess(null);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // This is a demo: in production, create a PaymentIntent on your server and confirm it here
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      setSuccess("Payment method created! (demo only)");
      setProcessing(false);
      alert("Payment successful!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: 480,
        maxWidth: 520,
        margin: "30px auto 0 auto",
        padding: 36,
        border: "1px solid #eee",
        borderRadius: 12,
        background: "#fafbfc",
        boxShadow: "0 4px 24px rgba(50,50,93,0.07)",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 16 }}>Pay with Card</h3>
      <div style={{ marginBottom: 12, textAlign: "center", fontWeight: 500 }}>
        Amount: <span style={{ color: "#2d8f5a" }}>${amount}</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#fa755a" },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || processing}
        style={{
          marginTop: 20,
          width: "100%",
          padding: "10px 0",
          background: "#635bff",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: 600,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        {processing ? "Processing..." : `Pay $${amount}`}
      </button>
      {error && (
        <div style={{ color: "red", marginTop: 10, textAlign: "center" }}>
          {error}
        </div>
      )}
      {success && (
        <div style={{ color: "green", marginTop: 10, textAlign: "center" }}>
          {success}
        </div>
      )}
    </form>
  );
};

export default StripeCheckoutForm;
