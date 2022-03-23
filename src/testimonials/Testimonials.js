import React from "react";
import './testimonials.css'
import AVTR1 from "../assets/avatar1.jpg"
import AVTR2 from "../assets/avatar2.jpg"
import AVTR3 from "../assets/avatar3.jpg"
import AVTR4 from "../assets/avatar4.jpg"

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avater:AVTR1,
        name:"Tina Snow",
        review:"Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument!",
    },
    {
        avater:AVTR2,
        name:"Shatta Wale",
        review:"Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument!",
    },
    {
        avater:AVTR3,
        name:"Kwame Despite",
        review:"Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument!",
    },
    {
        avater:AVTR4,
        name:"Jone Don",
        review:"Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument!",
    }
]

const Testimonials = () =>{
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials-container"
                // install Swiper modules
                    modules={[ Pagination ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>

                {
                    data.map(({avater, name, review}, index)=>{
                        return(
                            <SwiperSlide key={index} className="testimonials">
                                <div className="client-avatar">
                                    <img src={avater} alt="Avatar One"/>
                                </div>
                                <h5 className="client-name">{name}</h5>
                                <small className="client-review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Testimonials
