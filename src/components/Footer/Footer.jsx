import React, { useEffect } from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <ScrollToTop />
      <div className="hr"></div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerContainer1">
            <h2 className="contact_title">Contact Info</h2>
            <ul>
              <li className="contact_li service_li_top">
                Phone: +8801640-877467
              </li>
              <li className="contact_li">Mail Us: massenglish2.0@gmail.com</li>
              <li className="contact_li">Address: Tangail, Balla</li>
            </ul>
          </div>
          <div className="footerContainer2">
            <h2 className="important_title">Important Links</h2>
            <ul>
              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li className="important_li">About Us</li>
              </Link>
              <li className="important_li">Terms And Condition</li>
              <li className="important_li">Privacy Policy</li>
            </ul>
          </div>
          <div className="footerContainer3">
            <h1 className="social_title">Contact Me</h1>
            <div className="social_links">
              <div className="facebook_icon">
                <a
                  href="https://www.facebook.com/profile.php?id=61564948479471"
                  target="_blank"
                  className="link_title"
                >
                  Facebook
                </a>
              </div>
              <div className="x_icon">
                <a href="https://x.com/" target="_blank" className="link_title">
                  Twitter (X)
                </a>
              </div>
              <div className="whatsapp_icon">
                <a
                  href="https://wa.me/+880"
                  target="_blank"
                  className="link_title"
                >
                  Whats App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hr-b"></div>
        <p className="fbt">
          Copyright ©2025 Mass-English | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
