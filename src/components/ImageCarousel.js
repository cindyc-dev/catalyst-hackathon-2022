import React from "react";
import Carousel from "react-material-ui-carousel";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel height={300} autoPlay={false}>
      {images.map((image, index) => (
        <img style={{height: "100%"}} key={index} src={image["data_url"]} alt="" />
      ))}
    </Carousel>
  );
}

export default ImageCarousel;