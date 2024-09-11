import React from 'react';
import './ContactUs.css';
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-icons">
        <a href="https://www.instagram.com/rentmate.in?igsh=MTkxcWVjZGgzM3duZw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" />
        </a>
        <a href="https://whatsapp.com/channel/0029VaihMXZBlHpXNBv3hR1A" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="contact-icon" />
        </a>
        <a href="tel:+919365620077">
          <FaPhoneAlt className="contact-icon" />
        </a>
        <a href="mailto:rentmate24@gmai.com">
          <FaEnvelope className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
