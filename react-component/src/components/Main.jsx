import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Buttons from './Buttons'
import LanguageLink from './LanguageLink'
import '../styles/main.css'

const Main = () => {
  return (
    <div className='app-main'>
        <Logo/>
        <SearchBar/>
        <Buttons/>
        <LanguageLink/>
    </div>
  )
}

export default Main