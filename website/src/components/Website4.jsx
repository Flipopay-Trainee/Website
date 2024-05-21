import React from 'react'
import Horse from '../assets/Horse.png'
import './Website.css'

function Website4() {
  return (
    <section>
       <div className='cont-head'>
      <img src={Horse} alt="horse" />
      <h3 className="color-key">KEY GLOBAL NETWORK SDN BHD</h3>
      <p className="font-busi">B U S I N E S S &nbsp; N E T W O R K I N G &nbsp; C L U B</p>
      <p className="font-key">www.keyglobalnetwork.com</p>
    </div>
    <div className="cont-name">
        <div>
        <p className="tag-arrow">1 -&gt; &nbsp;</p>
        </div>
        <div className="cont-flex">
        <p className="p-can">Can we know your full name ?</p>
        <input type="text" placeholder="5283 3456 7890 1289" />
        <span className="web4-button">
        <button className="button-nxt">NEXT</button>
        <button className="button-enter">press enter</button>
        </span>
        </div>
        </div>
        </section>
  )
}

export default Website4
