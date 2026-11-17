import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section7.scss";

const events = [
    {image: Photo. Image1Page1Section7, class: "Blog" , date: "Feb 16, 2024", title: "The entertainment program : bring your celebration to life"},
    {image: Photo. Image2Page1Section7, class: "Blog" , date: "Feb 21, 2023", title: "Unforgettable Wedding Trends to Inspire Your Big Day"},
]

export default function Section6() {    
    return (
        <>
            <section className="page1_section7">
                <div className="page1_section7_inside">
                    <div className="page1_section7_inside_title">
                        <p className="page1_section7_inside_title_class">Blog</p>
                        <div>
                            <h2>Learn more about our work</h2>
                            <p>
                                Adipiscing elit, sed do euismod tempor 
                                incidunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud 
                                exercitacion ullamco. sed do euismod 
                                tempor incidunt ut labore et dolore magna 
                                aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="page1_section7_inside_main">
                        {events.map((meow, index) => (
                            <article className="page1_section7_inside_main_art" key={index}>
                                <img src={meow.image} alt="" />
                                <div className="page1_section7_inside_main_art_date">
                                    <p>{meow.class} · {meow.date}</p>
                                </div>
                                <div className="page1_section7_inside_main_art_title">
                                    <h4>{meow.title}</h4>
                                    <Link to="">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.315863 21.6621C0.113682 21.4599 9.74659e-05 21.1857 9.72943e-05 20.8997C9.71227e-05 20.6138 0.113682 20.3396 0.315863 20.1374L18.296 2.15725L8.70141 2.15878C8.41513 2.15878 8.14056 2.04505 7.93813 1.84262C7.73569 1.64018 7.62197 1.36562 7.62196 1.07933C7.62196 0.793042 7.73569 0.518481 7.93813 0.316045C8.14057 0.113608 8.41513 -0.000119515 8.70141 -0.000119539L20.8986 -0.000120567C21.0404 -0.000298608 21.1808 0.0275008 21.3119 0.0816841C21.4429 0.135868 21.562 0.215373 21.6623 0.315645C21.7625 0.415917 21.842 0.534984 21.8962 0.66603C21.9504 0.797076 21.9782 0.937525 21.978 1.07933L21.978 13.2765C21.978 13.5628 21.8643 13.8373 21.6619 14.0398C21.4594 14.2422 21.1849 14.3559 20.8986 14.356C20.6123 14.3559 20.3377 14.2422 20.1353 14.0398C19.9329 13.8373 19.8191 13.5628 19.8191 13.2765L19.8207 3.6819L1.84051 21.6621C1.63833 21.8642 1.36411 21.9778 1.07818 21.9778C0.792258 21.9778 0.518043 21.8642 0.315863 21.6621Z" fill-rule="evenodd" clip-rule="evenodd" fill="black"/></svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}