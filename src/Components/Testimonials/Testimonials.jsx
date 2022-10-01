import React from 'react'
import './Testimonials.css'
import './testimonialsdata'
import { data } from './testimonialsdata'
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



function Testimonials() {
  return (
    <section id='testimonials'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials_container"
         // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
            {
              data.map(({avatar,name,review},index)=> {
                return(
                  <SwiperSlide key={index} className="testimonials">
                <div className="client_avatar">
                    <img src={avatar} alt="" />
                    
                </div>
                <h5>{name}</h5>
                    <small className='client_review'>{review}</small>
            </SwiperSlide>
                )
              })

            }
           
        </Swiper>
    </section>
  )
}

export default Testimonials