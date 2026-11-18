import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Photo } from "../../../Images.js";

import "swiper/css";
import "swiper/css/pagination";
import "./Section2.scss";

export default function Section2() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/services_portfolio")
            .then((res) => res.json())
            .then((data) => {
                setSlides(data);
            })
            .catch((err) => console.error("не удалось загрузить портфолио:", err));
    }, []);

    return (
        <>
            <section className="page3_section2">
                {slides.length > 0 && (
                    <Swiper
                        className="page3_section2_swiper"
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView="auto"
                        centeredSlides={true}
                        initialSlide={slides.length > 1 ? 1 : 0}
                        spaceBetween={30}
                        slideToClickedSlide={true}
                        grabCursor={true}
                        observer={true}
                        observeParents={true}
                        onSlideChange={(swiper) => {
                            setTimeout(() => {
                                if (!swiper.destroyed) {
                                    swiper.update();
                                }
                            }, 360);
                        }}
                    >
                        {slides.map((item, index) => (
                            <SwiperSlide
                                key={item.id || index}
                                className="page3_section2_slide"
                            >
                                <div className="page3_section2_slide_card">
                                    <img
                                        className="page3_section2_slide_card_image"
                                        src={item.image_url}
                                        alt=""
                                    />
                                    <div className="page3_section2_slide_card_info">
                                        <p className="page3_section2_slide_card_info_category">
                                            {item.category}
                                        </p>
                                        <h3>{item.title}</h3>
                                        <Link to={item.link || "/"}>
                                            Read More
                                            <img src={Photo.ArrowReadMorePage3Section2} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </section>
        </>
    );
}
