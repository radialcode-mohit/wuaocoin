import React from "react";
import mainlogoimg from "../assets/images/svg/2ndsecmainlogo.svg";
import { Col, Container, Row } from "react-bootstrap";
import orangeimg from "../assets/images/svg/orange.svg";
import redimg from "../assets/images/svg/redsecondsecdiv.svg";
import blueimg from "../assets/images/svg/blue.svg";
import purpleimg from "../assets/images/svg/purple.svg";
import pinkimg from "../assets/images/svg/pink.svg";
const OurProjects = () => {
  return (
    <section className="py-5">
      <Container className="custom_container py-5">
        <div className="py-5">
          <Row className=" justify-content-center justify-content-lg-between align-items-center py-5">
            <Col xl={6} sm={12} md={10} lg={7}>
              <div className="text-center position-relative second_sec_img_h_w">
                <img
                  src={mainlogoimg}
                  alt="logoimg"
                  className="w_100_sm h-100 secnd_sec_mainlogo_h_w position-relative z_index_minus_1 transform_tranlate_second_sec_img w_44_per_xsm"
                />
                <img
                  src={orangeimg}
                  alt="orange_card"
                  className="position-absolute orange_card_secnd_sec z_index_min us_1 w_58_per transition z_3 cursor_pointer max_ h_w_522 hover_translate_y_minus_10_per w- 100"
                />
                <img
                  src={redimg}
                  alt="red_card"
                  className="position-absolute w_36_per_xsm red_card_secnd_sec cursor_pointer hover_translate_x_10_per transition z_3 z_index_min us_1   max_h_w_522"
                />
                <img
                  src={blueimg}
                  alt="blue_card"
                  className="position-absolute w_36_per_xsm blue_card_secnd_sec cursor_pointer hover_translate_x_minus_10_per  transition z_3 z_index_ minus_1   max_h_w_522"
                />
                <img
                  src={purpleimg}
                  alt="purple_card"
                  className="position-absolute purple_card_secnd_sec cursor_pointer z_index_m hover_translate_purple transition z_3 inus_1 w_48_per  max_h_w_52 2"
                />
                <img
                  src={pinkimg}
                  alt="pink_card"
                  className="position-absolute pink_card_secnd_sec cursor_pointer hover_translate_10_per transition z_3 z_index _minus_1  w_48_per max_h_w_52 2"
                />
              </div>
            </Col>
            <Col
              lg={5}
              className=" position-relative z_index_3_lg pt-5 pt-lg-0"
            >
              <div className="pt-sm-5 pt-3">
                <div className="pt-5 pt-lg-0">
                  <div className="pt-5 pt-lg-0">
                    <p className="ff_montserrat fw-bold fs_5xl clr_dark">
                      Our Project
                    </p>
                    <p className="ff_montserrat fw-normal fs_md clr_dark">
                      Wuaocoin is the first project in the TechFi category that
                      allows users multiple options to have utility and
                      usability in the ecosystem, its time to change the way of
                      seeing the purchases and sales of products and services
                      within an multilateral electronic commerce platform using
                      crypto technology.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
