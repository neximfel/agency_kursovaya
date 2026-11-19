import { useState, useEffect } from "react"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import "swiper/css";
import "./Section1.scss"

const logos = [
    {img: Photo.Logo1Page1Section1},
    {img: Photo.Logo2Page1Section1},
    {img: Photo.Logo3Page1Section1},
    {img: Photo.Logo4Page1Section1},
    {img: Photo.Logo5Page1Section1},
    {img: Photo.Logo6Page1Section1},
]

export default function Section1(){

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/slides')
            .then((res) => res.json())
            .then((data) => {
              setSlides(data.length < 8 ? [...data, ...data] : data);
            })
            .catch((err) => console.error('не удалось загрузить слайды:', err));
    }, []);

    return(
        <>
            <section className="page1_section1">
                <div className="page1_section1_inside">
                    <div className="page1_section1_inside_top">
                        <div className="page1_section1_inside_top_text">
                            <h1>Experience Events Like Never Before.</h1>
                            <p>Welcome to R event agency, where innovation 
                                meets excellence in event planning. We take 
                                pride in crafting extraordinary moments 
                                tailored to your vision.</p>
                            <Link to="/pages"><p>Get Started</p> <div><img src={Photo.ArrowToRightPage1Section1} alt="" /></div></Link>
                        </div>
                        <div className="page1_section1_inside_top_pictures">
                            <img src={Photo.PicturesPage1Section1} alt="" />
                            <p>Total Satisfied Client</p>
                        </div>
                    </div>
                </div>
                <Swiper
                    className="page1_section1_swiper"
                    slidesPerView="auto"
                    grabCursor={true}
                    resistanceRatio={0.85}
                    spaceBetween={16}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                        sticky: false,
                        momentumVelocityRatio: 1,
                        momentumRatio: 0.3,
                        minimumVelocity: 0.02,
                    }}
                >
                {slides.map((meow, index) => (
                    <SwiperSlide key={`${meow.id}-${index}`} className="page1_section1_swiper_slide">
                        <img src={meow.image_url} alt={meow.alt_text || 'слайд'} />
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className="page1_section1_inside">
                    <div className="page1_section1_inside_logos">
                        <h3>Check our best clients and partners</h3>
                        <div className="page1_section1_inside_logos_images">
                            {logos.map((meow, index) => (
                                <img src={meow.img} alt="фото" key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}