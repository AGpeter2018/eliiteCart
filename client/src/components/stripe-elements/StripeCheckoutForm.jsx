import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeColor } from "../../redux/theme/theme-selector";
import { selectCart } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import axios from "axios";

import {
  addCartItemHistory,
  clearCartItem,
} from "../../redux/cart/cart-action";

import "./stripe-checkout.style.scss";

const StripeCheckoutForm = ({ amount }) => {
  const strucruredSelector = createStructuredSelector({
    items: selectCart,
    theme: selectThemeColor,
  });
  const { items, theme } = useSelector(strucruredSelector);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Theme-based styles
  const isDark = theme === "dark";
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
      setError("Stripe has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // createPaymentMethod
    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (pmError) {
      setError(pmError.message || "Payment method creation failed");
      setProcessing(false);
      console.error(JSON.stringify({ source: "stripe.createPaymentMethod", error: pmError }));
      return;
    }

    // prepare payload for backend
    const payload = {
      amount, // e.g. dollars
      amountInCents: Math.round(Number(amount) * 100),
      payment_method: paymentMethod.id,
      items: items || [],
      metadata: {
        timestamp: new Date().toISOString(),
      },
    };

    try {
      // send request to your backend endpoint (uses client proxy to server)
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const response = await axios.post(`${API_URL}/payment`, payload, {
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
});

      // expected server response shape: { success: true, message: "...", data: { ... } }
      if (response?.data?.success) {
        setSuccess(response.data.message || "Payment succeeded");
        alert(response.data.message || "Payment successful!");
        // save history and clear cart
        items.forEach((item) => {
          const itemWithDate = { ...item, date: new Date().toISOString() };
          dispatch(addCartItemHistory(itemWithDate));
        });
        dispatch(clearCartItem());
      } else {
        const info = response?.data || { message: "Unknown server response" };
        setError(info.message || "Payment failed");
        alert("Payment failed: " + (info.message || "See console for details"));
        console.error("Payment failed server response:", JSON.stringify(info, null, 2));
      }
    } catch (err) {
      // network / server error
      const errPayload =
        err?.response?.data ||
        { message: err.message || "Network or server error", status: err?.response?.status };
      setError(errPayload.message || "Payment error");
      alert("Payment error: " + (errPayload.message || "See console for details"));
      console.error("Payment request error:", JSON.stringify(errPayload, null, 2));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="checkout-form"
      id={theme}
    >
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
