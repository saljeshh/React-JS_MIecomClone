import Carousel from "react-bootstrap/Carousel";
import React from "react";

const Slider = ({ start }) => {
  return (
    <Carousel fade>
        {start.map((item,index)=>(
            <Carousel.Item>
                <img className="d-block w-100" src={item} alt="First Slide" />
            </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Slider;
