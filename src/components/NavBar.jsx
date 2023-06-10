import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import discord from "../assets/images/svg/discord.svg";
import twiter from "../assets/images/svg/twiter.svg";
import telegram from "../assets/images/svg/telegram.svg";
import linkdin from "../assets/images/svg/in.svg";
import navworld from "../assets/images/svg/navworld.svg";
import downarrow from "../assets/images/svg/downarrow.svg";
import buynow from "../assets/images/svg/header_2.svg";
const NavBar = () => {
  const [nav, setNav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }

  return (
    <nav className=" position-relative z-3">
      <Container className=" custom_container">
        <div className="d-flex align-items-center justify-content-between">
          <img className="cursor_pointer py-4" src={pagelogo} alt="pagelogo" />
          <div
            className={
              nav === true
                ? "mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row mobile_ul hide "
                : "mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row mobile_ul show "
            }
          >
            <ul className="mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row">
              <li onClick={() => setNav(true)}>
                <a
                  className="ff_montserrat nav_line fw-semibold fs_sm color_white"
                  href="#"
                >
                  ICO
                </a>
              </li>
              <li onClick={() => setNav(true)} className="ps-lg-4 pt-3 pt-lg-0">
                <a
                  className="nav_line ff_montserrat fw-semibold fs_sm color_white"
                  href="#"
                >
                  WHITEPAPER
                </a>
              </li>
            </ul>
            <div className=" d-flex ps-3 pe-4">
              <img
                onClick={() => setNav(true)}
                className="cursor_pointer translate_y_onhover ps-1 ms-2 nav_socialicon"
                src={discord}
                alt="discord"
              />
              <img
                onClick={() => setNav(true)}
                className="cursor_pointer  translate_y_onhover ps-1 ms-2 nav_socialicon"
                src={twiter}
                alt="twiter"
              />
              <img
                onClick={() => setNav(true)}
                className="cursor_pointer translate_y_onhover ps-1 ms-2 nav_socialicon"
                src={telegram}
                alt="telegram"
              />
              <img
                onClick={() => setNav(true)}
                className="cursor_pointer translate_y_onhover  ps-1 ms-2  nav_socialicon"
                src={linkdin}
                alt="linkdin"
              />
            </div>
            <span className="mx-1 cursor_pointer ff_montserrat fw-normal fs_sm color_white language_change_icon">
              <img className=" pe-2" src={navworld} alt="navworld" />
              Eng <img src={downarrow} alt="downarrow" />
            </span>
          </div>
          <div className="text-end d-lg-none">
            <button
              className={nav === true ? "hamburger" : "hamburger-2"}
              onClick={() => setNav(!nav)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
