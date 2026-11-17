import { useState } from "react";
import { Photo } from "../../Images.js";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:5000/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            setEmail("");
        } catch (err) {
            console.error("ошибка отправки почты:", err.message);
        }
    };

    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="footer_top_inside">
                    <div className="footer_top_inside_left">
                        <h2>Crafting <br /> <span>Extraordinary</span> Events Together</h2>
                        <p>
                            Adipiscing elit, sed do euismod tempor incidunt
                            ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitacion ullamco.
                            sed do euismod tempor incidunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitacion ullamco
                        </p>
                        <div className="footer_top_inside_left_socials">
                            <a href="https://www.facebook.com/"><img src={Photo.FacebookFooter} alt="" /></a>
                            <a href="https://x.com/"><img src={Photo.XFooter} alt="" /></a>
                            <a href="https://www.youtube.com/"><img src={Photo.YouTubeFooter} alt="" /></a>
                        </div>
                    </div>

                    <div className="footer_top_inside_mid">
                        <p>Links</p>
                        <ul>
                            <Link to="/">Homepage</Link>
                            <Link to="/pages">Pages</Link>
                            <Link to="/event">Event</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/contact">Contact us</Link>
                        </ul>
                    </div>

                    <div className="footer_top_inside_right">
                        <p>Subscribe to our newsletter</p>
                        <form className="footer_top_inside_right_form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Your email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer_bot">
                <div className="footer_bot_inside">
                    <Link to="/"><img src={Photo.LogoWhiteLettersFooter} alt="" /></Link>
                    <p>Copyright © 2024 Rometheme. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}