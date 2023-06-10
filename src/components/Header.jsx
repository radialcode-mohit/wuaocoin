import React from "react";
import NavBar from "./NavBar";
import navlayer from "../assets/images/svg/navlayer.svg";
import layer2 from "../assets/images/svg/layer2.svg";
import layer3 from "../assets/images/svg/layer3.svg";
import layer4 from "../assets/images/svg/lastlayer.svg";
import buynow from "../assets/images/svg/header_2.svg";
import { Col, Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <header className="linear_bg_orange position-relative pb-1 overflow_hidden custom_container2">
      <img
        className="position-absolute top-0 start-0 navlayer_modify"
        src={navlayer}
        alt="navlayer"
      />
      <img
        className=" d-none d-md-block position-absolute  layer2_modify"
        src={layer2}
        alt="layer2"
      />{" "}
      <img
        className=" position-absolute d-none d-xl-block layer3_modify"
        src={layer3}
        alt="layer3"
      />{" "}
      <img
        className=" position-absolute d-none d-xl-block layer4_modify"
        src={layer4}
        alt="layer4"
      />
      <NavBar />
      <Container className="custom_container py-md-5 my-md-5 ">
        <Row className=" py-5 my-md-5 position-relative z_3 align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="pe-lg-5 pe-xxl-0 ">
            <div className="pe-lg-5 pe-xxl-0">
              <p className="mb-0 ff_montserrat fw-semibold fs_xl color_white">
                Welcome to
              </p>
              <h1 className="py-1 ff_montserrat fw_900 fs_6xl color_white">
                The Future of E-Commerce
              </h1>
              <p className="mb-0 ff_montserrat fw-medium fs_md color_white">
                A multi-purpose token to improve digital sales and purchases
              </p>
              <div className="d-flex mt-4 pt-4">
                <button className="btn_1_modify color_transparent ff_montserrat fw-semibold fs_sm clr_linear_orange">
                  <span className="clr_lenearorange"> How To Buy</span>
                </button>{" "}
                <button className=" ff_montserrat fw-semibold color_white fs_sm btn_2_modify">
                  Read Whitepaper
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="pb-md-5 mb-5">
            <div className=" ps-lg-3 ms-xxl-2">
              <img
                className="ps-lg-5 ms-lg-5 ms-xxl-0 ps-xxl-0 w_100"
                src={buynow}
                alt="buynow"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
