import React from "react";

import {
  FaSquareTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa6";

import "./social-icon.style.scss";

const SocialIcon = () => {
  return (
    <div className="social">
      <a
        href="https://x.com/AdenijiPet52714?t=7p0vbj0_F1RqAuiDu_q63w&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/adeniji-peter-6342511bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.facebook.com/share/19SpeJJfT8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://github.com/AGpeter2018"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcon;
