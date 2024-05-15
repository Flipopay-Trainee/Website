import React from 'react'
import third from "../assets/page3.png";

export default function Page3() {
  return (
    <div className='Third-container'>
     <div className='third-left' >
     <div>
      <h2 className='third-h1'>OUR</h2>
      <h3 className='third-h2'>MISSION</h3>
      <hr className='third-hr'/>
      <div className='third-para'>
        <p>
          Empower young entrepreneurs to expand <br /> buisness, develop essential skills, and network <br /> with industry leaders for growth and success.
        </p>
      </div>
      
        <button className='third-btn'>UNLOCK YOUR POTENTIAL</button>
      
     </div>
     </div>
     <div className='third-right'>
      <img className='third-img' src={third} alt="" />
     </div>
    </div>
  )
}
