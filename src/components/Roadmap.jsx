import React from "react";
import roadmap from "../assets/images/svg/roadmap.svg";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const Roadmap = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        {" "}
        <div className="max_w_700px mx-auto text-center">
          <h2 className="ff_montserrat fw-bold clr_dark fs_5xl mb-3">
            RoadMap
          </h2>
          <p className="ff_montserrat fw-normal clr_black opac_07 fs_md mb-5 pb-3">
            Knowing our values, understanding the business idea and then,
            gradually, presenting the plans to the public is our way of doing
            things.
          </p>
          <img
            src={roadmap}
            alt="roadmapimg"
            className="roadmap_img_h_w w-100"
          />
        </div>
      </Container>
      <section>
        {" "}
        <Slider className="w_95_per mx-auto roadmapslider" {...settings}>
          <div className="bg_linear_gold border_radius_15 roadmap_cards_padding h-100">
            <h3 className="ff_montserrat fw-bold clr_white fs_5xl mb-3  opac_05">
              01
            </h3>
            <p className="ff_montserrat fw-bold clr_white fs_xl mb-0">
              Organizational <br /> concept <br /> (creations)
            </p>
          </div>
          <div className="bg_linear_red border_radius_15 roadmap_cards_padding h-100">
            <h3 className="ff_montserrat fw-bold clr_white fs_5xl mb-3  opac_05">
              02
            </h3>
            <p className="ff_montserrat fw-bold clr_white fs_xl mb-0 ps-3">
              Directional Process (Actions)
            </p>
          </div>
          <div className="bg_blue border_radius_15 roadmap_cards_padding h-100">
            <h3 className="ff_montserrat fw-bold clr_white fs_5xl mb-3  opac_05">
              03
            </h3>
            <p className="ff_montserrat fw-bold clr_white fs_xl mb-0 ps-3">
              Operational Development (technical team)
            </p>
          </div>
          <div className="bg_darkblue border_radius_15 roadmap_cards_padding h-100">
            <h3 className="ff_montserrat fw-bold clr_white fs_5xl mb-3  opac_05">
              04
            </h3>
            <p className="ff_montserrat fw-bold clr_white fs_xl mb-0 ps-3">
              Strategic Opportunities (alliances)
            </p>
          </div>
          <div className="bg_linear_purple border_radius_15 roadmap_cards_padding h-100">
            <h3 className="ff_montserrat fw-bold clr_white fs_5xl mb-3  opac_05">
              05
            </h3>
            <p className="ff_montserrat fw-bold clr_white fs_xl mb-0 ps-3">
              Stakeholders (benefits)
            </p>
          </div>
          <div className="bg_linear_pink border_radius_15 roadmap_cards_padding h-100">
            <h3 className="ff_montserrat fw-bold clr_white fs_5xl mb-3  opac_05">
              06
            </h3>
            <p className="ff_montserrat fw-bold clr_white fs_xl mb-0 ps-3">
              Human Identity (social contribution)
            </p>
          </div>
        </Slider>
      </section>
    </section>
  );
};

export default Roadmap;
