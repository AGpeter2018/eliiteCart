import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaQuoteLeft } from "react-icons/fa"; // Imported React Icon

import HomeImage from "../../assets/img-home.jpg";
import productImage from "../../assets/product-main-2.jpg";
import Header from "../../components/header-component/header.component"; // Keep Header
import SocialIcon from "../../components/social-icon-component/social-icon.component";

import Footer from "../../components/footer-component/footer.component";
import Directory from "../../components/directory-component/directory.component"; // Added from instruction

import IconGem from "../../assets/geml.svg";
import IconCart from "../../assets/product.svg";
import IconDelivery from "../../assets/truckl.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";


import "./landing-page.style.scss";

const contentDetails = [
  { img: mail, info: "adenijipeter2018@gmail.com" },
  { img: call, info: "+2348148915457, +2349036550687" },
  { img: location, info: "Anambra, Anambra state, Nigeria" },
];

const testimonials = [
  { name: "Sarah J.", quote: "The quality of the dress I bought is unmatched! Absolutely love it.", role: "Verified Buyer" },
  { name: "Michael T.", quote: "Fast delivery and great customer support. Highly recommended.", role: "Frequent Shopper" },
  { name: "Jessica L.", quote: "EliteCart has completely changed how I shop for fashion online.", role: "Fashion Blogger" }
];

const features = [
  { title: "Secure Payments", description: "100% secure payment processing with industry-standard encryption", icon: "🔒" },
  { title: "Easy Returns", description: "30-day hassle-free returns on all products", icon: "↩️" },
  { title: "24/7 Support", description: "Round-the-clock customer support to assist you anytime", icon: "💬" },
  { title: "Global Shipping", description: "We ship to over 100 countries worldwide", icon: "🌍" }
];

const faqs = [
  { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy on all items. Products must be unworn and in original packaging." },
  { question: "Do you offer international shipping?", answer: "Yes! We ship to over 100 countries worldwide with tracking available for all orders." },
  { question: "How can I track my order?", answer: "Once your order ships, you'll receive a tracking number via email to monitor your delivery." }
];

const pricingPlans = [
  { name: "Free Tier", price: "$0", features: ["Basic Analytics", "Standard Delivery", "Community Support", "Limited Discounts"] },
  { name: "Elite Plus", price: "$19.99", features: ["Priority Shipping", "Early Access to Sales", "Personal Stylist", "Dedicated Support"] },
  { name: "Royal VIP", price: "$49.99", features: ["Next Day Delivery", "Exclusive Collections", "Free Gift Wrapping", "White Glove Service"] }
];


const LandingPage = () => {
  const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="landing-page">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="landing-content"
        id="home"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="content-text" variants={fadeInUp}>
          <h1>Welcome to <span className="brand-highlight">EliteCart</span></h1>
          <p id={theme}>
            Where fashion meets elegance. Discover a curated collection of trendy outfits,
            luxury brands, and timeless classics. Elevate your wardrobe today.
          </p>
          <Link to="/signup" className="get-started-button">
            Shop Collection
          </Link>
        </motion.div>
        <motion.div className="content-img-wrapper" variants={fadeInUp}>
          <img src={HomeImage} alt="Fashion Collection" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="About"
        id="about"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-header">
          <motion.h2 variants={fadeInUp}>Why Choose Us</motion.h2>
          <motion.div className="underline" variants={fadeInUp}></motion.div>
        </div>

        <motion.div className="about-info" variants={staggerContainer}>
          <motion.div className="about-card glass-card" variants={fadeInUp}>
            <div className="icon-wrapper">
              <img src={IconGem} alt="Quality" className="about-img" />
            </div>
            <h3>Premium Quality</h3>
            <p>
              Hand-picked items that ensure the finest quality fabrics and craftsmanship for your comfort.
            </p>
          </motion.div>
          <motion.div className="about-card glass-card" variants={fadeInUp}>
            <div className="icon-wrapper">
              <img src={IconCart} alt="Affordable" className="about-img" />
            </div>
            <h3>Best Prices</h3>
            <p>
              Luxury doesn't have to break the bank. We offer competitive pricing on all top-tier brands.
            </p>
          </motion.div>
          <motion.div className="about-card glass-card" variants={fadeInUp}>
            <div className="icon-wrapper">
              <img src={IconDelivery} alt="Fast Delivery" className="about-img" />
            </div>
            <h3>Fast Delivery</h3>
            <p>
              Swift and secure shipping worldwide, so you can start enjoying your new look in no time.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Product Teaser Section */}
      <motion.section
        className="products"
        id="product"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="section-header">
          <h2>Our Collections</h2>
          <div className="underline"></div>
        </div>

        <div className="product-info glass-card">
          <div className="product-img">
            <img src={productImage} alt="Featured Product" className="product-image" />
          </div>
          <div className="product-text">
            <h3>Fashion Meets Comfort</h3>
            <p id={theme}>
              Discover a curated collection designed to fit every style and occasion.
              From casual everyday wear to elegant evening outfits, we bring you
              quality fabrics and modern designs.
            </p>
            <p id={theme}>
              Explore our exclusive deals and find your perfect fit today.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials"
        id="testimonials"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-header">
          <motion.h2 variants={fadeInUp}>What Our Customers Say</motion.h2>
          <motion.div className="underline" variants={fadeInUp}></motion.div>
        </div>
        <motion.div className="testimonials-grid" variants={staggerContainer}>
          {testimonials.map((testi, idx) => (
            <motion.div className="testimonial-card glass-card" key={idx} variants={fadeInUp}>
              <div className="quote-icon"><FaQuoteLeft /></div>
              <p className="quote">"{testi.quote}"</p>
              <div className="author">
                <h4>{testi.name}</h4>
                <span>{testi.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features"
        id="features"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-header">
          <motion.h2 variants={fadeInUp}>Why Shop With Us</motion.h2>
          <motion.div className="underline" variants={fadeInUp}></motion.div>
        </div>
        <motion.div className="features-grid" variants={staggerContainer}>
          {features.map((feature, idx) => (
            <motion.div className="feature-card glass-card" key={idx} variants={fadeInUp}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="pricing"
        id="pricing"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-header">
          <motion.h2 variants={fadeInUp}>Membership Plans</motion.h2>
          <motion.div className="underline" variants={fadeInUp}></motion.div>
        </div>
        <motion.div className="pricing-grid" variants={staggerContainer}>
          {pricingPlans.map((plan, idx) => (
            <motion.div className="pricing-card glass-card" key={idx} variants={fadeInUp}>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}<span>/mo</span></div>
              <ul className="plan-features">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="plan-button">Get Started</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="faq"
        id="faq"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="section-header">
          <motion.h2 variants={fadeInUp}>Frequently Asked Questions</motion.h2>
          <motion.div className="underline" variants={fadeInUp}></motion.div>
        </div>
        <motion.div className="faq-list" variants={staggerContainer}>
          {faqs.map((faq, idx) => (
            <motion.div className="faq-item glass-card" key={idx} variants={fadeInUp}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>


      {/* Contact Section */}
      <motion.section
        className="contact"
        id="contact"
        data-theme={theme}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="content">
          <div className="contact-session glass-card">
            <div className="contact-left">
              <h1>Get in Touch</h1>
              <p id={theme}>
                Have questions or need assistance? We're here to help you 24/7.
              </p>
              <div className="socials">
                <SocialIcon />
              </div>
            </div>
            <div className="contact-right">
              {contentDetails.map((detail, index) => (
                <div className="content-detail" key={index}>
                  <img src={detail.img} alt="icon" />
                  <p id={theme}>{detail.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default LandingPage;
