import React from "react";
import logo from "./logo.jpg";

export default function Header() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" style={{
          maxWidth: '100%', // Ensure the image doesn't exceed its original width
          width: '150px',   // Set the desired width of the image
          height: 'auto',   // Automatically adjust the height to maintain aspect ratio
        }}/>
      </div>
      <div className="card">
        <center>
          <h1>CV Screening</h1>
        </center>
      </div>
    </div>
  );
}
