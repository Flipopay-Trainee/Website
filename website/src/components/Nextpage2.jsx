import React from "react";
import horse from "../assets/Logo.png";

const deatils = [
  {
    heading: "Venture Captalist",
    para: "Established Venture Captalist and Buisness Club in year 2019 to Create young entrepreneures and a sustainable Buisness platform.",
  },
  {
    heading: "Young Entrepreneurs",
    para: " Buisness opportunities to expand the growth of young entrepreneurs financially, economically and socially to lead a sucessful lifestyle",
  },
  {
    heading: "Buisness Coaching",
    para: "Create Buisness opportunities in various designated fields in accordance with current young generations buisness intrest by providing professional Buisness Coaching and Traning ",
  },
  {
    heading: " Buisness Network",
    para: " Specializes mainly in creating buisness network among young enthusiastic upcoming enterpreneurs.",
  },
  {
    heading: "Best Privileges",
    para: "Set up provide the best privileges to its members",
  },
  {
    heading: " Buisness Expand",
    para: " Creates opportunity for every member to gain new contacts and expand buisness through multiple resources via buisness networking",
  },
];

export default function Nextpage2() {
  return (
    <>
      <div className="Container-deatils">
        <div className="deatils-box">
          <div className="deatils-logo">
            <img className="deatils-img" src={horse} alt="" />
            <h3 className="deatils-head">KEY GLOBAL SOLUTIONS SDN BHD</h3>
            <p className="deatils-para">Buisness Networking club</p>
            <p className="deatils-para2">www.keyglobalnetwork.com</p>
          </div>
        </div>
      <div className="right-container">
      <h3 className="right-h1">About</h3>
        <h2 className="right-h2">Us</h2>
        <hr className="second-hr"/>
       
      <div className="Deatils-right">

          {deatils.map((item) => (
            <article key={item.name} className={item.name}>
              <h2>{item.heading}</h2>
              <p>{item.para}</p>
            </article>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
