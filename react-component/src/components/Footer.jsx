import React from 'react'
import Location from './Location'
import BottomLeftMenu from './BottomLeftMenu'
import BottomRightMenu from './BottomRightMenu'
import FooterText from './FooterText'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div>
      <Location/>
      <BottomLeftMenu/>
      <FooterText/>
      <BottomRightMenu/>
    </div>
  )
}

export default Footer
