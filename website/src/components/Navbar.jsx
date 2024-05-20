import React from 'react'
import horse from "../assets/Logo.png";
export default function Navbar() {
  return (
    <div className='nav-container'>
       <div className="Left-logo">
          <img className="first-img" src={horse} alt="" />
          <h3 className="head-1">KEY GLOBAL SOLUTIONS SDN BHD</h3>
          <p className="first-para1">Buisness Networking club</p>
          <p className="first-para2"> www.keyglobalnetwork.com</p>
        </div>

        <div className="Right-Logo">
          <div className="Lists">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Our Venture</li>
              <li>Contact Us</li>
              <button className="rightlogo-btn">Join Us</button>
            </ul>
          </div>
        </div>
    </div>
  )
}
