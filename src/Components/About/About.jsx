import React from 'react'
import './About.css'
import ME from '../../assets/meiii.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="abt" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about-card'>
            <BsAward className='about_icon ' />
              <h5>Experience</h5>
              
              <small> 3+ Years Working</small>
              
            </article>
            <article className='about-card'>
            <FiUsers className='about_icon ' />
              <h5>Customers</h5>
              
              <small> 200+ World wide</small>
              
            </article>
            <article className='about-card'>
            <VscFolderLibrary className='about_icon ' />
              <h5>Projects</h5>
              
              <small> 80 + Projects</small>
              x
            </article>

          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, ipsum autem sapiente quod fuga accusamus nisi voluptate illo perspiciatis accusantium veniam quidem iure doloremque! Nemo distinctio quia laboriosam blanditiis. Accusantium.
          </p>
          <a href="http://" className='btn btn-primary'>Lt's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About