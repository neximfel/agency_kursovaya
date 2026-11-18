import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section3.scss";

export default function Section3() {
    return (
        <>
            <section className="page2_section3">
                <button><img src={Photo.PlayButtonPage2Section3} alt="" /></button>
            </section>
        </>
    );
}