import { useState, useEffect } from "react";
import { Photo } from "../../../Images.js";
import "./Section2.scss";

export default function Section2() {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/api/faqs")
            .then((res) => res.json())
            .then((data) => {
                setFaqs(data);
            })
            .catch((err) => console.error("не удалось загрузить вопросы:", err));
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="page4_section2">
                <div className="page4_section2_inside">
                    <div className="page4_section2_inside_content">
                        <h2>frequently asked questions</h2>
                        <div className="page4_section2_inside_content_list">
                            {faqs.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        className={`page4_section2_inside_content_list_item ${isOpen ? "active" : ""}`}
                                        key={item.id || index}
                                        onClick={() => handleToggle(index)}
                                    >
                                        <div className="page4_section2_inside_content_list_item_question">
                                            <h4>{item.question}</h4>
                                            <img src={Photo.ArrowDownPage4Section2} alt="" />
                                        </div>
                                        {isOpen && (
                                            <p className="page4_section2_inside_content_list_item_answer">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
