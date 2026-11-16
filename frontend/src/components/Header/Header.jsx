import "./Header.scss"
import { Photo } from "../../Images.js"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header_inside">
                    <Link to="/" className="header_inside_logo"><img src={Photo.LogoHeaderImage} alt="" /></Link>
                    <nav className="header_inside_nav">
                        <NavLink to="/" className="header_inside_nav_link" end>Home</NavLink>
                        <NavLink to="/pages" className="header_inside_nav_link">Pages</NavLink>
                        <NavLink to="/event" className="header_inside_nav_link">Event</NavLink>
                        <NavLink to="/porfolio" className="header_inside_nav_link">Portfolio</NavLink>
                        <NavLink to="/blog" className="header_inside_nav_link">Blog</NavLink>
                    </nav>
                    <div className="header_inside_buttons">
                        <button className="header_inside_buttons_login">Log In</button>
                        <button className="header_inside_buttons_signup">Sign Up</button>
                    </div>                    
                </div>
            </header>
        </>
    )
}