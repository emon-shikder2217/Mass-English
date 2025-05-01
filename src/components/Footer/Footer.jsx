import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <>
      <div className="hr"></div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerContainer1">
            <h2 className="contact_title">Contact Info</h2>
            <ul>
              <li className="contact_li service_li_top">Phone: +8801827485</li>
              <li className="contact_li">E-mail: massenglish12@gmail.com</li>
              <li className="contact_li">Address: Tangail, Balla</li>
            </ul>
          </div>
          <div className="footerContainer2">
            <h2 className="important_title">Important Links</h2>
            <ul>
              <li className="important_li">About Us</li>
              <li className="important_li">Terms And Condition</li>
              <li className="important_li">Privacy Policy</li>
            </ul>
          </div>
          <div className="footerContainer3">
            <h1 className="social_title">Contact Me</h1>
            <div className="social_links">
              <div className="facebook_icon">
                <a
                  href="https://www.facebook.com/emonshikder2217/"
                  target="_blank"
                  className="link_title"
                >
                  Facebook
                </a>
              </div>
              <div className="x_icon">
                <a
                  href="https://x.com/EmonShikde2217"
                  target="_blank"
                  className="link_title"
                >
                  Twitter (X)
                </a>
              </div>
              <div className="whatsapp_icon">
                <a
                  href="https://wa.me/+8801827640863"
                  target="_blank"
                  className="link_title"
                >
                  Whats App
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
