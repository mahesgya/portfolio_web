import React, { useState } from "react";
import "../Style/Navbar.css";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Home from "./Home";
import About from "./About";
import Ormawa from "./ormawa";
import Footer from "./Footer";
import { useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Homeref = useRef(null);
  const Aboutref = useRef(null);
  const Ormawaref = useRef(null);
  const Contactref = useRef(null);

  const handleClick = () => {
    Homeref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick2 = () => {
    Aboutref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    Ormawaref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    Contactref.current?.scrollIntoView({ behavior: "smooth" });
  };


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="navContain">
        <header id="Header" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <img src="Images/Logo2.png" alt="" className="logo-argy" />
          </div>
          <div className="nav-Login">
            <ul id="navbar" className={menuOpen ? "open" : ""}>
              <li className="liHome">
                <button className="navbarli" onClick={handleClick}>
                  <NavLink to="/">Home</NavLink>
                </button>
              </li>
              <li>
                <button className="navbarli" onClick={handleClick2}>
                  <NavLink to="/">About</NavLink>
                </button>
              </li>
              <li>
                <button className="navbarli" onClick={handleClick3}>
                  <NavLink to="/">Portfolio</NavLink>
                </button>
              </li>
              <li>
                <button className="navbarli" onClick={handleClick4}>
                  <NavLink to="/">Contact</NavLink>
                </button>
              </li>
            </ul>
          </div>
        </header>
        <Home ref={Homeref}/>
      </div>
      <About ref={Aboutref}/>
      <Ormawa ref={Ormawaref}/>
      <Footer ref={Contactref}/>
    </section>
  );
};

export default Header;
