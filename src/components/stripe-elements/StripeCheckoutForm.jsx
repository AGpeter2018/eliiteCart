import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeColor } from "../../redux/theme/theme-selector";
import { selectCart } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { addCartItemHistory } from "../../redux/cart/cart-action";

const StripeCheckoutForm = ({ amount }) => {
  const strucruredSelector = createStructuredSelector({
    items: selectCart,
  });
  const { items } = useSelector(strucruredSelector);
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const theme = useSelector(selectThemeColor); // 'light' or 'dark' from Redux

  // Theme-based styles
  const isDark = theme === "dark";
  const formStyle = {
    width: 480,
    maxWidth: 520,
    margin: "30px auto 0 auto",
    padding: 36,
    border: isDark ? "1px solid #444" : "1px solid #eee",
    borderRadius: 12,
    background: isDark ? "#232323" : "#fafbfc",
    color: isDark ? "#fff" : "#222",
    boxShadow: isDark
      ? "0 4px 24px rgba(0,0,0,0.25)"
      : "0 4px 24px rgba(50,50,93,0.07)",
  };
  const buttonStyle = {
    marginTop: 20,
    width: "100%",
    padding: "10px 0",
    background: isDark ? "#635bff" : "#635bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
  };
  const amountStyle = {
    marginBottom: 12,
    textAlign: "center",
    fontWeight: 500,
    color: isDark ? "#ffe082" : "#2d8f5a",
  };
  const cardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        fontSize: "16px",
        color: isDark ? "#fff" : "#32325d",
        backgroundColor: isDark ? "#232323" : "#fafbfc",
        "::placeholder": {
          color: isDark ? "#bbb" : "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };

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

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: 16,
          color: isDark ? "#fff" : undefined,
        }}
      >
        Pay with Card
      </h3>
      <div style={amountStyle}>
        Amount: <span>${amount}</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        <CardElement options={cardElementOptions} />
      </div>
      <button
        type="submit"
        disabled={!stripe || processing}
        style={buttonStyle}
        onClick={() =>
          items.forEach((item) => dispatch(addCartItemHistory(item)))
        }
      >
        {processing ? "Processing..." : `Pay $${amount}`}
      </button>
      {error && (
        <div style={{ color: "#fa755a", marginTop: 10, textAlign: "center" }}>
          {error}
        </div>
      )}
      {success && (
        <div style={{ color: "#2d8f5a", marginTop: 10, textAlign: "center" }}>
          {success}
        </div>
      )}
    </form>
  );
};

export default StripeCheckoutForm;
