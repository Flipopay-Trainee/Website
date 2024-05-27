import React from "react";
import Navbar from "./Navbar";

export default function Page1() {
  return (
    <div className="page-1">
      <Navbar />

      <div className="centre-cntnt">
        <div className="landing-text">
          <h4 className="head-2">
            KEY TO THE <br />
           <span className="centre-h">FUTURE</span>
          </h4>
        </div>
        <button className="centre-btn">JOIN OUR CLUB</button>
      </div>
    </div>
  );
}
