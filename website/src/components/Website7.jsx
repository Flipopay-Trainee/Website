import React from 'react'
import './Website.css'
import Horse from '../assets/Horse.png'

function Website7() {
  return (
    <div className="container">
    <div className='cont-head'>
      <img src={Horse} alt="horse" />
      <h3 className="color-key">KEY GLOBAL NETWORK SDN BHD</h3>
      <p className="font-busi">B U S I N E S S &nbsp; N E T W O R K I N G &nbsp; C L U B</p>
      <p className="font-key">www.keyglobalnetwork.com</p>
    </div>
    <div className="cont-end">
        <p className='p-thankyou'>THANK YOU</p>
        <h3>YOU ARE A MEMBER <br /> NOW </h3>
        <p className='p-font-call'>You get a call from our executive</p>
    </div>
    </div>
  )
}

export default Website7
