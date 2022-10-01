import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/mei.png'
import HeaderSocial from './HeaderSocial'


function Header() {
  return (
    <header >
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Anoop Narayanan</h1>
        <h5 className='text-light'>Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="http://" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header