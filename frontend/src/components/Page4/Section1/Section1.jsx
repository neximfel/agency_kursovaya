import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import "./Section1.scss";

export default function Section1() {
    const [article, setArticle] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/service_articles")
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setArticle(data[0]);
                }
            })
            .catch((err) => console.error("не удалось загрузить статью:", err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:5000/api/contact_messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error("ошибка отправки сообщения:", err.message);
        }
    };

    return (
        <>
            <section className="page4_section1">
                <div className="page4_section1_inside">
                    {article && <h2>{article.title}</h2>}
                    <div className="page4_section1_inside_main">
                        {article && (
                            <div className="page4_section1_inside_main_left">
                                <img
                                    className="page4_section1_inside_main_left_hero"
                                    src={article.hero_image}
                                    alt=""
                                />
                                <p className="page4_section1_inside_main_left_text">
                                    {article.intro_text}
                                </p>
                                <div className="page4_section1_inside_main_left_block">
                                    <h3>{article.subtitle_1}</h3>
                                    <p className="page4_section1_inside_main_left_text">
                                        {article.text_1}
                                    </p>
                                </div>
                                <div className="page4_section1_inside_main_left_gallery">
                                    <img src={article.gallery_image_1} alt="" />
                                    <img src={article.gallery_image_2} alt="" />
                                </div>
                                <p className="page4_section1_inside_main_left_text">
                                    {article.text_2}
                                </p>
                                <div className="page4_section1_inside_main_left_block">
                                    <h3>{article.subtitle_2}</h3>
                                    <p className="page4_section1_inside_main_left_text">
                                        {article.text_3}
                                    </p>
                                </div>
                                <div
                                    className="page4_section1_inside_main_left_video"
                                    style={{
                                        backgroundImage: `url(${article.video_image})`,
                                    }}
                                >
                                    <button type="button">
                                        <img src={Photo.PlayIconPage3Section3} alt="" />
                                    </button>
                                </div>
                                <p className="page4_section1_inside_main_left_text">
                                    {article.bottom_text}
                                </p>
                            </div>
                        )}
                        <aside className="page4_section1_inside_main_right">
                            <div className="page4_section1_inside_main_right_form_block">
                                <h3>Get in Touch</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                    <button type="submit">
                                        <img src={Photo.SendPage4Section1} alt="" />
                                        Get in Touch
                                    </button>
                                </form>
                            </div>
                            <div className="page4_section1_inside_main_right_contact">
                                <h4>Contact Info</h4>
                                <div className="page4_section1_inside_main_right_contact_list">
                                    <div className="page4_section1_inside_main_right_contact_list_item">
                                        <div>
                                            <img src={Photo.LocationPage4Section1} alt="" />
                                        </div>
                                        <p>
                                            Germany-
                                            <br />
                                            785 15h street, office 478 Berlin, De 81566
                                        </p>
                                    </div>
                                    <div className="page4_section1_inside_main_right_contact_list_item">
                                        <div>
                                            <img src={Photo.MailPage4Section1} alt="" />
                                        </div>
                                        <p>info@gmail.com</p>
                                    </div>
                                    <div className="page4_section1_inside_main_right_contact_list_item">
                                        <div>
                                            <img src={Photo.PhonePage4Section1} alt="" />
                                        </div>
                                        <p>+815 94125 69</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
