import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section2.scss";

const perks = [
    {logo: Photo.Logo1Page2Section2, title: "Gourmet Cuisine", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis. sed do euismod tempor incidunt ut labore et dolore magna aliqua. "},
    {logo: Photo.Logo2Page2Section2, title: "Modern Catering", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis. sed do euismod tempor incidunt ut labore et dolore magna aliqua. "},
    {logo: Photo.Logo3Page2Section2, title: "The art of Serving", descr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis. sed do euismod tempor incidunt ut labore et dolore magna aliqua. "},
]

export default function Section2() {
    return (
        <>
            <section className="page2_section2">
                <div className="page2_section2_inside">
                    <div className="page2_section2_inside_left">
                        <div>
                            <img src={Photo.Image1Page2Section2} alt="" />
                            <img src={Photo.Image2Page2Section2} alt="" />
                        </div>
                        <img src={Photo.Image3Page2Section2} alt="" />
                    </div>
                    <div className="page2_section2_inside_right">
                        <div className="page2_section2_inside_right_title">
                            <p className="page2_section2_inside_right_title_class">What we do</p>
                            <h2>Crafting culinary memories</h2>
                            <p className="page2_section2_inside_right_title_description">
                                Adipiscing elit, sed do euismod tempor incidunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitacion ullamco. sed do 
                                euismod tempor incidunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="page2_section2_inside_right_perks">
                            {perks.map((meow, index) => (
                                <div className="page2_section2_inside_right_perks_cat" key={index}>
                                    <div><img src={meow.logo} alt="" /></div>
                                    <h5>{meow.title}</h5>
                                    <p>{meow.descr}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}