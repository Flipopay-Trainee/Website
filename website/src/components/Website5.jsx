import React from 'react'
import './Website.css'
import Horse from '../assets/Horse.png'

function Website5() {
  return (
      <div className="container">
       <div className='cont-head'>

      <img src={Horse} alt="horse" />
      <h3 className="color-key">KEY GLOBAL NETWORK SDN BHD</h3>
      <p className="font-busi">B U S I N E S S &nbsp; N E T W O R K I N G &nbsp; C L U B</p>
      <p className="font-key">www.keyglobalnetwork.com</p>
    </div>
    <div className="cont-name">
        <div>
        <p className="tag-arrow">2 -&gt; &nbsp;</p>
        </div>
        <div className="cont-flex">
        <p className="p-can"> What your phone number ?</p>
        <input type="text" placeholder="5283 3456 7890 1289" />
        <span className="web4-button">
        <button className="button-nxt">NEXT</button>
        <button className="button-enter">press enter</button>
        </span>
        </div>
        </div>
        </div>
  )
}

export default Website5
