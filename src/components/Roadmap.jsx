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
        <Slider className="w-75 mx-auto" {...settings}>
          <div className="bg_linear_gold border_radius_15">
            <h3 className="ff_montserrat fw-bold clr_dark fs_5xl mb-3">01</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </section>
    </section>
  );
};

export default Roadmap;
