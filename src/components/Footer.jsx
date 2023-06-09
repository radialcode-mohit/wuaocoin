import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footericon from "../assets/images/svg/footericon.svg";
import socialicon1 from "../assets/images/svg/soical1.svg";
import socialicon2 from "../assets/images/svg/social2.svg";
import socialicon3 from "../assets/images/svg/social3.svg";
import socialicon4 from "../assets/images/svg/social4.svg";
const Footer = () => {
  return (
    <footer className="pt-lg-5">
      <Container className="custom_container py-4 py-lg-5">
        <Row className="justify-content-between pb-lg-4">
          <Col lg={3}>
            <div>
              <a href="#">
                <img
                  src={footericon}
                  alt="pagelogo"
                  className="footericon_h_w w-100 pt-1"
                />
              </a>
              <p className="ff_montserrat fw-normal fs_sm clr_dark opac_07 pt-3 mt-1">
                Welcome to The Future of the Market. The world's first Global
                TechFi Platform
              </p>
              <div className="d-flex pt-2">
                <div className="socialicons_hover transition cursor_pointer linear_bg_orange_footer border_radius_50 p-2 h_w_footer_linear d-flex justify-content-center align-items-center">
                  <img src={socialicon1} alt="discord" className="w-100" />
                </div>
                <div className="socialicons_hover transition cursor_pointer linear_bg_orange_footer ms_12 border_radius_50 p-2 h_w_footer_linear d-flex justify-content-center align-items-center">
                  <img src={socialicon2} alt="tweeter" className="w-100" />
                </div>
                <div className="socialicons_hover transition cursor_pointer linear_bg_orange_footer ms_12 border_radius_50 p-2 h_w_footer_linear d-flex justify-content-center align-items-center">
                  <img src={socialicon3} alt="telegram" className="w-100" />
                </div>
                <div className="socialicons_hover transition cursor_pointer linear_bg_orange_footer ms_12 border_radius_50 p-2 h_w_footer_linear d-flex justify-content-center align-items-center">
                  <img src={socialicon4} alt="linkdin" className="w-100" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className="pt-5 pt-lg-0">
            <Row>
              <Col xs={6} sm={4} lg={4}>
                <ul className="mb-0 ps-0">
                  <li className="ff_montserrat fw-semibold  fs_md clr_dark">
                    Documents
                  </li>
                  <li className="mt-3">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      WhitePaper
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      Customers
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} sm={4} lg={4}>
                <ul className="mb-0 ps-0">
                  <li className="ff_montserrat fw-semibold  fs_md clr_dark">
                    Quick Links
                  </li>
                  <li className="mt-3">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      Benefits
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      ICO
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      RoadMap
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      Tokenmics
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      Partnership
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} sm={4} lg={4} className="pt-4 pt-sm-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_montserrat fw-semibold  fs_md clr_dark">
                    Company
                  </li>
                  <li className="mt-3">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      WUAOCOIN
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="ff_montserrat fw-normal opac_08 fs_sm clr_dark"
                    >
                      WUAOSHOP
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <p className="mb-0 text-center bordertop_1px_solid_f9f9f9 opac_03 py-3 py-lg-4">
        © Copyright 2022 - Wuaocoin
      </p>
    </footer>
  );
};

export default Footer;
