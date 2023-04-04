import React from 'react'
import Carbon from '../images/download.png'

export default function FooterText() {
  return (
    <div className='app-footertext'>
        <img src={Carbon} alt="carbon" style={{height: "15px"}}/>
        <p>Carbon neutral since 2007</p>
    </div>
  )
}
