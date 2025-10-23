import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Stripe from "stripe";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Validate environment variables
if (!process.env.STRIPE_KEY) {
  console.error("❌ STRIPE_KEY is missing in .env file");
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_KEY, { apiVersion: "2022-11-15" });
const app = express();
const port = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
// Simple CORS - allows your Vercel domain
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://eliite-cart.vercel.app',  // Replace with your Vercel URL
    process.env.CLIENT_URL
  ],
  credentials: true
};

app.use(cors(corsOptions));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Payment endpoint (expects client's payload: { amountInCents, payment_method, metadata })
app.post("/payment", async (req, res) => {
  try {
    const { amountInCents, payment_method, metadata } = req.body;

    if (!amountInCents || !payment_method) {
      return res.status(400).json({ success: false, message: "Missing amountInCents or payment_method" });
    }

    // Create and confirm PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amountInCents),
      currency: "usd",
      payment_method,
      confirmation_method: "automatic",
      confirm: true,
      metadata: metadata || {},
    });

    // Handle responses
    if (paymentIntent.status === "succeeded") {
      return res.json({ success: true, message: "Payment succeeded", data: paymentIntent });
    }

    if (paymentIntent.status === "requires_action" || paymentIntent.status === "requires_source_action") {
      return res.json({
        success: false,
        requires_action: true,
        payment_intent_client_secret: paymentIntent.client_secret,
        message: "Additional authentication required",
      });
    }

    return res.json({ success: false, message: "Unhandled PaymentIntent status", data: paymentIntent });
  } catch (err) {
    console.error("Server /payment error:", err);
    return res.status(500).json({ success: false, message: err.message || "Server error", error: err });
  }
});

// Production static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
});