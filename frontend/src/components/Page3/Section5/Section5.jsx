import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Photo } from "../../../Images.js";
import "./Section5.scss";

export default function Section5() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/next_events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
            })
            .catch((err) => console.error("не удалось загрузить мероприятия:", err));
    }, []);

    return (
        <>
            <section className="page3_section5">
                <div className="page3_section5_inside">
                    <div className="page3_section5_inside_header">
                        <p className="page3_section5_inside_header_subtitle">
                            Booking Calendar
                        </p>
                        <div className="page3_section5_inside_header_row">
                            <h2>Next events</h2>
                            <p>
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta
                                sunt explicabo.
                            </p>
                            <Link to="/">
                                View More
                                <img src={Photo.ArrowReadMorePage3Section2} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="page3_section5_inside_list">
                        {events.map((event, index) => (
                            <div
                                className="page3_section5_inside_list_item"
                                key={event.id || index}
                            >
                                <div className="page3_section5_inside_list_item_left">
                                    <div className="page3_section5_inside_list_item_left_date">
                                        <span>{event.day}</span>
                                        <p>{event.month}</p>
                                    </div>
                                    <img
                                        className="page3_section5_inside_list_item_left_photo"
                                        src={event.image_url}
                                        alt=""
                                    />
                                    <div className="page3_section5_inside_list_item_left_info">
                                        <h3>{event.title}</h3>
                                        <div className="page3_section5_inside_list_item_left_info_meta">
                                            <span className="page3_section5_inside_list_item_left_info_meta_city">
                                                {event.city}
                                            </span>
                                            <div className="page3_section5_inside_list_item_left_info_meta_time">
                                                <div className="page3_section5_inside_list_item_left_info_meta_time_icon">
                                                    <img src={Photo.CalendarPage3Section5} alt="" />
                                                </div>
                                                <p>{event.time_range}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`page3_section5_inside_list_item_price ${event.is_free ? "free" : ""}`}
                                >
                                    {event.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
