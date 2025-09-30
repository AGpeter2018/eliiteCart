import React from "react";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { themeChangeAction } from "../../redux/theme/theme-action";

import SocialIcon from "../social-icon-component/social-icon.component";
import UserIcon from "../../assets/user_icon.svg";

import "./footer.style.scss";

const Footer = () => {
  const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top_left">
          <p id={theme}>
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
        </div>
        <form
          action="https://formspree.io/f/movnookg" // your endpoint URL
          method="POST"
          className="footer-top_right"
        >
          <div className="footer-email_input">
            <img src={UserIcon} alt="" />
            <input type="email" placeholder="Enter your email" name="email" />
          </div>
          <button type="submit" className="footer-sub">
            Subscribe
          </button>
        </form>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom_left" id={theme}>
          &copy; 2026 EliteCart. All rights reserved.
        </p>
        <div className="footer-bottom_right">
          <SocialIcon className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
