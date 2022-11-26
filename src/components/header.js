import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useSound from 'use-sound';
import boopSfx from '../sound/sound.wav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [activeClass, setActiveClass] = useState(false);
    const [play] = useSound(boopSfx);
    const openHeader = () => {
        setOpen(!open);
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
           if(window.scrollY > 130){
            setActiveClass(true)
           }
           else{
            setActiveClass(false)
           }
        });
      }, []);
    return (
        <>
        <header className={activeClass ? "header-active" : ""}>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={play}>
                        {/* Priyank Tyagi */}
                       <img src={process.env.PUBLIC_URL + "images/logowhite.png"} style={{maxWidth:"280px"}}></img>
                    </Link>
                    <button onClick={openHeader} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className={`collapse navbar-collapse ${open ? "show" : "hide"}`} id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/blogs" onClick={play} className="nav-link">My Blogs</Link></li>
                            <li className="nav-item"><Link to="/about" onClick={play} className="nav-link">About Me</Link></li>
                            {/* <li className="nav-item"><Link to="/work" className="nav-link">Work</Link></li> */}
                            <li className="nav-item"><Link to="/contact" onClick={play} className="nav-link">Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>
        </>
    )
}

export default Header;