import React from "react";
import Footer from "./Footer";
import FileUpload from "./FileUpload";
import Header from "./Header";

export default function MainPage() {
  return (
    <>
      <div>
        <div className="main-card">
          <div className="container">
            <Header />
            <FileUpload />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
