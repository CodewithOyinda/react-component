import React from 'react'
import Picture from '../images/my picture.JPG'

export default function Avatar() {
  return (
    <div>
     <img src={Picture} alt="avatar" style= {{height: "30px", width:"30px", borderRadius: "50rem"}}/>
    </div>
  )
}
