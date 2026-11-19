import { useState } from "react"
import "./Header.scss"
import { Photo } from "../../Images.js"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return(
        <>
            <header className="header">
                <div className="header_inside">
                    <Link to="/" className="header_inside_logo" onClick={closeMenu}><img src={Photo.LogoHeaderImage} alt="" /></Link>
                    <nav className={`header_inside_nav ${menuOpen ? "open" : ""}`}>
                        <NavLink to="/" className="header_inside_nav_link" end onClick={closeMenu}>Home</NavLink>
                        <NavLink to="/pages" className="header_inside_nav_link" onClick={closeMenu}>Pages</NavLink>
                        <NavLink to="/event" className="header_inside_nav_link" onClick={closeMenu}>Event</NavLink>
                        <NavLink to="/porfolio" className="header_inside_nav_link" onClick={closeMenu}>Portfolio</NavLink>
                        <NavLink to="/blog" className="header_inside_nav_link" onClick={closeMenu}>Blog</NavLink>
                        <div className="header_inside_nav_mobile_buttons">
                            <button className="header_inside_buttons_login" onClick={closeMenu}>Log In</button>
                            <button className="header_inside_buttons_signup" onClick={closeMenu}>Sign Up</button>
                        </div>
                    </nav>
                    <div className="header_inside_buttons">
                        <button className="header_inside_buttons_login">Log In</button>
                        <button className="header_inside_buttons_signup">Sign Up</button>
                    </div>
                    <button
                        type="button"
                        className={`header_inside_burger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    )
}
