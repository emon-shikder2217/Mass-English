import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="parent">
        <div class="div1">
          <h2 className="service_title">Services</h2>
          <ul>
            <li className="service_li service_li_top">Designing</li>
            <li className="service_li">Development</li>
            <li className="service_li">Branding</li>
            <li className="service_li">Marketing</li>
          </ul>
        </div>
        <div class="div2">
          <h1 className="links_title">Links</h1>
          <ul>
            <li className="link_li link_li_top">
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="link_li">
              <Link to="about" smooth={true} duration={500}>About Me</Link>
            </li>
            <li className="link_li">
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className="link_li">
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className="link_li">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
        <div class="div3">
          <h1 className="contact_title_footer">Contact Me</h1>
          <div className="social_links">
            <div className="facebook_icon">
              <a
                className="facebook_logo"
                href="https://www.facebook.com/emonshikder2217/"
                target="_blank"
              >
                <FaFacebook />
              </a>
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
                className="x_logo"
                target="_blank"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://x.com/EmonShikde2217"
                target="_blank"
                className="link_title"
              >
                X
              </a>
            </div>
            <div className="whatsapp_icon">
              <a
                href="https://wa.me/+8801827640863"
                className="whatsapp_logo"
                target="_blank"
              >
                <FaWhatsappSquare />
              </a>
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
  );
};

export default Footer;
