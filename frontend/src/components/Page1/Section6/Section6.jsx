import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "./Section6.scss";

export default function Section6() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((err) => console.error('не удалось загрузить отзывы:', err));
    }, []);

    const chunkedReviews = [];
    for (let i = 0; i < reviews.length; i += 4) {
        chunkedReviews.push(reviews.slice(i, i + 4));
    }

    return (
        <>
            <section className="page1_section6">
                <div className="page1_section6_inside">
                    <div className="page1_section6_inside_testimonials">
                        <img src={Photo.TestimonialsPage1Section6} alt="" />
                        <p>Testimonials</p>
                    </div>
                    <h2>What our client say about us</h2>
                    <Swiper
                        className="page1_section6_inside_main"
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        modules={[Pagination]}
                    >
                        {chunkedReviews.map((group, groupIndex) => (
                            <SwiperSlide key={groupIndex} className="page1_section6_inside_main_slide">
                                {group.map((meow, index) => (
                                    <div 
                                        className="page1_section6_inside_main_slide_card" 
                                        key={meow.id || index}
                                    >
                                        <div className="page1_section6_inside_main_slide_card_header">
                                            <img 
                                                src={meow.picture} 
                                                className="page1_section6_inside_main_slide_card_header_avatar" 
                                            />
                                            <div className="page1_section6_inside_main_slide_card_header_info">
                                                <h4>{meow.name}</h4>
                                                <img  src={meow.rating} alt=""/>
                                            </div>
                                        </div>
                                        <p className="page1_section6_inside_main_slide_card_text">
                                            "{meow.text}"
                                        </p>
                                        <span className="page1_section6_inside_main_slide_card_date">
                                            {meow.date}
                                        </span>
                                    </div>
                                ))}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}