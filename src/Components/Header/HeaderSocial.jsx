import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function HeaderSocial() {
  return (
    <div className='header_social'>
        <a href="http://likedin" target="blank"><BsLinkedin/></a>
        <a href="http://github" target="blank"><FaGithub/></a>
        <a href="http://instagram" target="blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial