import { useState, useEffect } from "react"
import "./Section5.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"

export default function Section5(){

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/company_events')
            .then((res) => res.json())
            .then((data) => {
              setEvents(data);
            })
            .catch((err) => console.error('не удалось загрузить слайды:', err));
    }, []);


    return(
        <>
            <section className="page1_section5">
                <div className="page1_section5_inside">
                    <div className="page1_section5_inside_portfolio">
                        <p>Our Portfolio</p>
                    </div>
                    <h2>
                        From Concept to Celebration, Where Your Dreams 
                        Take Center Stage
                    </h2>
                    <div className="page1_section5_inside_main">
                        {events.map((meow, index) => (
                            <div
                                className={`page1_section5_inside_main_event ${meow.rotation} ${meow.adaptive_visible}`}
                                key={`${meow.id}-${index}`}
                            >
                                <div
                                    className={`page1_section5_inside_main_event_image ${meow.rotation} ${meow.adaptive_visible}`}
                                    style={{
                                        backgroundImage: `url(${meow.image})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat"
                                    }}
                                >
                                    <div className={`page1_section5_inside_main_event_image_class ${meow.rotation} ${meow.adaptive_visible}`}>
                                        <p>{meow.class}</p>
                                    </div>
                                </div>
                                <div className={`page1_section5_inside_main_event_text ${meow.rotation} ${meow.adaptive_visible}`}>
                                    <h3>{meow.title}</h3>
                                    <p className={`page1_section5_inside_main_event_text_client ${meow.rotation} ${meow.adaptive_visible}`}>
                                        Client : {meow.client}
                                    </p>
                                    <p className={`page1_section5_inside_main_event_text_description ${meow.rotation} ${meow.adaptive_visible}`}>
                                        <span>Description : </span> {meow.description}
                                    </p>
                                    <Link to={meow.link}>Read More <img src={Photo.ArrowToRightPage1Section1} alt="" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}