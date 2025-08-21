import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./styles/carousel.css";
import { useState } from "react";

const Carousel = () => {
  /* state variables */
  const [autoplay, setAutoplay] = useState(false);
  /* other hooks */

  /* static variables */
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const properties = {
    prevArrow: (
      <button
        className="arrowButton left"
        role="navigation"
        aria-label="previous slide"
      ></button>
    ),
    nextArrow: (
      <button
        className="arrowButton right"
        role="navigation"
        aria-label="next slide"
      ></button>
    ),
  };

  /* useRefs */

  /* useEffects */

  /* api calls */

  /* helper functions */

  /* render functions */

  const renderAutoplayButton = () => {
    return (
      <button
        className={`autoplayButton ${autoplay ? "pauseIcon" : "playIcon"}`}
        role="button"
        aria-label={autoplay ? "Slideshow now playing" : "Slideshow paused"}
        onClick={() => setAutoplay(!autoplay)}
      />
    );
  };

  const renderCarousel = () => {
    return (
      <Slide
        {...properties}
        arrows
        canSwipe
        infinite
        transitionDuration={500}
        autoplay={autoplay}
        pauseOnHover
        duration={2500}
        easing="ease-out"
        cssClass="slidesWrapper"
      >
        <div className="each-slide-effect">
          <img
            src={images[0]}
            alt="Mountain region during a sunset with a full moon on the right"
          />
        </div>
        <div className="each-slide-effect">
          <img
            src={images[1]}
            alt="A lone antelope in a desert in front of sand dunes"
          />
        </div>
        <div className="each-slide-effect">
          {/* <div
            className="slideImage"
            style={{ backgroundImage: `url(${images[2]})` }}
          ></div> */}
          <img
            src={images[2]}
            alt="A silhoutte of a mountain region far away with a background of colorful gradient sunset"
          />
        </div>
      </Slide>
    );
  };

  return (
    <div className="CarouselWrapper">
      {renderCarousel()}
      {renderAutoplayButton()}
    </div>
  );
};

export default Carousel;
