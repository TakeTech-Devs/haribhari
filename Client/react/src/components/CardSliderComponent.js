import React from "react";
// import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CardSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
    //   showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      itemClass="carousel-item-padding-60-px"
    >
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "200px",
          backgroundColor: "red"
        }}
      >
        Item 1
      </div>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "200px",
          backgroundColor: "green"
        }}
      >
        Item 2
      </div>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "200px",
          backgroundColor: "yellow"
        }}
      >
        Item 3
      </div>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "200px",
          backgroundColor: "blue"
        }}
      >
        Item 4
      </div>
    </Carousel>
  );
}
