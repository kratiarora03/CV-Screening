import React from "react";
import logo from "./logo.jpg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <img src={logo} alt="Logo" style={{
          maxWidth: '100%', // Ensure the image doesn't exceed its original width
          width: '120px',   // Set the desired width of the image
          height: 'auto',   // Automatically adjust the height to maintain aspect ratio
        }}/>
          <ul className="social-links">
            <li>
              <a
                href="https://www.instagram.com/cloudwindmillsolutions/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cloudwindmill-solutions/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/people/Cloudwindmill-Solutions/100068567868069/"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="footer-text">
          Developed By: Karyashala Tech Solution Pvt Ltd 2023ⓒ <br />
          <span>
            611, Unitech Arcadia, South City 2, Sector 49, Gurgaon-122018
          </span>
          <br />
          Email: <a to="mailto:info@karyashala.co.in">info@karyashala.co.in</a>
        </p>
      </footer>
    </>
  );
}
