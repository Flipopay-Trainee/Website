import React from 'react'
import "./Website.css"
import Horse from '../assets/Horse.png'

function Website3() {
  return (
    <div className="container">
    <div className='cont-head'>
      <img src={Horse} alt="horse" />
      <h3 className="color-key">KEY GLOBAL NETWORK SDN BHD</h3>
      <p className="font-busi">B U S I N E S S &nbsp; N E T W O R K I N G &nbsp; C L U B</p>
      <p className="font-key">www.keyglobalnetwork.com</p>
    </div>
    <div className="cont-title">
        <p className="p-title">WELCOME TO</p>
        <h5 className="h5-head">KEY GLOBAL NETWORK</h5>
        <p className="p-title2">We’d like to know about you.</p>
        <button>LET’S TALK</button>
    </div>
    </div>
  )
}

export default Website3
