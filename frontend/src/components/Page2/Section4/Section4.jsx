import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section4.scss";

export default function Section4() {
    return (
        <>
            <section className="page2_section4">
                <div className="page2_section4_inside">
                    <div className="page2_section4_inside_left">
                        <p className="page2_section4_inside_right_title_class">Your Event Architects</p>
                        <h2>Designing Experiences, Inspiring Memories</h2>
                        <p className="page2_section4_inside_right_title_description">
                            In tincidunt rhoncus tellus iaculis finibus. Mauris 
                            rhoncus scelerisque mi nec sollicitudin. Nam nisl 
                            massa, vehicula ut euismod sit amet, feugiat a libero. 
                            Mauris maximus urna nec neque viverra.
                        </p>
                        <Link to="/">Ask us Anthing <img src={Photo.ArrowToRightPage1Section2} alt="" /></Link>
                    </div>
                    <div className="page2_section4_inside_right">
                        <div>
                            <img src={Photo.HappyPage2Section4} alt="" />
                            <p>Let's Make Every Event Special</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}