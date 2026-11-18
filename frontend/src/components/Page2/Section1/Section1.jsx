import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section1.scss";

export default function Section1() {
    return (
        <>
            <section className="page2_section1">
                <div className="page2_section1_inside">
                    <h2>About us</h2>
                    <div className="page2_section1_inside_main">
                        <div className="page2_section1_inside_main_left">
                            <div className="page2_section1_inside_main_left_title">
                                <p>What we do</p>
                                <h2>We craft and preserve beautiful, enduring experiences</h2>
                            </div>
                            <img src={Photo.Image1Page2Section1} alt="" />
                        </div>
                        <div className="page2_section1_inside_main_right">
                            <img src={Photo.Image2Page2Section1} alt="" />
                            <div className="page2_section1_inside_main_right_text">
                                <p>
                                    Adipiscing elit, sed do euismod tempor incidunt 
                                    ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitacion ullamco. sed 
                                    do euismod tempor incidunt ut labore et dolore 
                                    magna aliqua.  sed do euismod tempor incidunt ut 
                                    labore et dolore magna aliqua. Adipiscing elit, 
                                    sed do euismod tempor incidunt ut labore et dolore 
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                    exercitacion ullamco. sed do euismod tempor 
                                    incidunt ut labore et dolore magna aliqua.  
                                    sed do euismod tempor incidunt ut labore et 
                                    dolore magna aliqua. 
                                </p>
                                <Link to="">Learn More <img src={Photo.ArrowToRightPage1Section2} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}