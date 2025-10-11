import React from "react";
import { Link } from "react-router-dom";

import HomeImage from "../../assets/img-home.jpg";
import productImage from "../../assets/product-main-2.jpg";
import Header from "../../components/header-component/header.component";
import SocialIcon from "../../components/social-icon-component/social-icon.component";
// import ContactRight from "../../components/contact-right/contact-right.component";
import Footer from "../../components/footer-component/footer.component";

import IconGem from "../../assets/geml.svg";
import IconCart from "../../assets/product.svg";
import IconDelivery from "../../assets/truckl.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { themeChangeAction } from "../../redux/theme/theme-action";

import "./landing-page.style.scss";

const contentDetails = [
  { img: mail, info: "adenijipeter2018@gmail.com" },
  { img: call, info: "+2348148915457, +2349036550687" },
  { img: location, info: "Anambra, Anambra state, Nigeria" },
];

const LandingPage = () => {
  const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-content" id="home" data-theme={theme}>
        <div className="content-text">
          <h1>Welcome to EliteCart</h1>
          <p id={theme}>EliteCart brings together everything you love about fashion style, quality, and affordability all in one place. From everyday wear to luxury outfits, we’ve got you covered with top brands, trendy collections, and trusted fashion sellers.</p>
          <Link to="/signup" className="get-started-button">
            Get Started
          </Link>
        </div>
        
          <img src={HomeImage} alt="Shopping" />
        
      </div>
      <section className="About" id="about" data-theme={theme}>
        <h2>About</h2>
        <div className="underline"></div>
        <div className="about-info">
          <div className="about-text">
            <img src={IconGem} alt="Gem Icon" className="about-img" />
            <p>
              EliteCart is an innovative e-commerce platform designed to provide
              a seamless shopping experience for customers worldwide.
            </p>
          </div>
          <div className="about-text">
            <img src={IconCart} alt="Product Icon" className="about-img" />
            <p>
              Our mission is to offer a wide range of products at competitive
              prices while ensuring exceptional customer service.
            </p>
          </div>
          <div className="about-text">
            <img src={IconDelivery} alt="Delivery Icon" className="about-img" />
            <p>
              We are committed to fast and reliable delivery, ensuring your
              orders arrive on time without any forms of delay.
            </p>
          </div>
        </div>
      </section>
      <section className="products" id="product" data-theme={theme}>
        <h2>Products</h2>
        <div className="underline"></div>
        <div className="product-info">
          <div className="product-img">
            <img src={productImage} alt="" className="product-image" />
          </div>
          <div className="product-text">
            <p id={theme}>
              EliteCart store is where fashion meets comfort! Discover a curated
              collection of trendy clothing designed to fit every style and
              occasion. From casual everyday wear to elegant outfits, we bring
              you quality fabrics, modern designs, and affordable prices all in
              one place.
            </p>
            <p id={theme}>
              Whether you're looking for the latest fashion trends or timeless
              classics, EliteCart has something for everyone. Shop now and
              elevate your wardrobe with our exclusive collections!
            </p>
          </div>
        </div>
      </section>
      <section className="contact" id="contact" data-theme={theme}>
        <div className="content">
          <div className="content-title">
            <h1>Get in touch</h1>
            <div className="underline"></div>
          </div>
          <div className="contact-session">
            <div className="content-left">
              <h1>Let's talk</h1>
              <p id={theme}>
                At EliteCart, we're available to take on an inquiry, so feel
                free to get in touch
              </p>
              <div className="content-details">
                {contentDetails.map((detail, index) => {
                  return (
                    <div className="content-detail" key={index}>
                      <img src={detail.img} alt="" />
                      <p id={theme}>{detail.info}</p>
                    </div>
                  );
                })}
                <div className="icon">
                  <SocialIcon />
                </div>
              </div>
            </div>
            {/* <ContactRight /> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
