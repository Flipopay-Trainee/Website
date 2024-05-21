import React from 'react'
import './Website.css'
import Horse from '../assets/Horse.png'

function Website6() {
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
        <p className="tag-arrow">3 -&gt; &nbsp;</p>
        </div>
        <div className="cont-flex-ques">
        <p className="p-can-ques">Glad you are at the last question </p>
        <p className="p-can-ques">We would like know your mail id ?</p>
        <input type="text" placeholder="5283 3456 7890 1289"/>
        <span className="web4-button">
        <button className="button-nxt">JOIN THE CLUB</button>
        <button className="button-enter">press enter</button>
        </span>
        </div>
        </div>
        </section>
  )
}

export default Website6
