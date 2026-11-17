import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section8.scss";

const images = [
  Photo.Image1Page1Section8,
  Photo.Image2Page1Section8,
  Photo.Image3Page1Section8,
  Photo.Image4Page1Section8,
  Photo.Image5Page1Section8,
];

export default function Section8() {

    const trackImages = [...images, ...images, ...images, ...images];

    return (
        <>
            <section className="page1_section8">
                <div className="page1_section8_top">
                    <div>
                        <p>Contact us</p>
                        <h2>Let’s bring your vision to life together now!</h2>
                        <Link to="">Let’s Talk <img src={Photo.ArrowToRightPage1Section1} alt="" /></Link>
                    </div>
                </div>
                <div className="page1_section8_bot">
                    <img className="page1_section8_bot_inst" src={Photo.InstPage1Section8} alt="" />
                    <div className="page1_section8_bot_slider">
                        {trackImages.map((meow, index) => (
                            <div className="page1_section8_bot_slider_item" key={index}>
                                <img src={meow} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}