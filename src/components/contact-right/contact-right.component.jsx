import React from "react";

import "./contact-right.style.scss";

const ContactRight = () => {
  return (
    <div className="content-right-block">
      <form
        className="content-right"
        action="https://formspree.io/f/movnookg" // your endpoint URL
        method="POST"
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" required />
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label htmlFor="message">Write your message here</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
          resizse="none"
          width="300"
          height="150"
          required
        ></textarea>
        <button type="submit" className="contact-submit">
          Submit now
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
