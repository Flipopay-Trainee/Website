import React from "react";
import fourth from "../assets/fourth.png";

export default function Page4() {
  return (
    <div className="Fourth-container">
      {/* <div className="fourth-left">
        <img className="fourth-img" src={fourth} alt="" />
      </div> */}
      <img className="fourth-img values-img" src={fourth} alt="" />
      <div className="Fourth-right">
        <h2 className="fourth-h1">OUR</h2>
        <h3 className="fourth-h2">VISION</h3>
        <hr className="fourth-hr" />

        <p className="fourth-para">
          Venture capitalist and buisness club in <br /> Malaysia which has the
          higher number of <br />
          established young entrepreneurs.
        </p>

        <button className="fourth-btn">BUILD YOUR LEGACY NOW</button>
      </div>
    </div>
  );
}
