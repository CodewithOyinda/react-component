import React from 'react'
import AppsLuncherIcon from './AppsLuncherIcon'
import Avatar from './Avatar'
import MenuItem from './MenuItem'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='app-header'>
    <div className='app-header-menu'>
   <MenuItem title={"Gmail"}/>
   <MenuItem title={"Images"}/>
   <AppsLuncherIcon/>
   <Avatar/>
   </div>
    </div>
  )
}

export default Header