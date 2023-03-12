import "./slider.scss";

// Library Imports
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/swiper.min.css";

const slider = ({ children, slidesToShow }) => {
  return (
    <div className="slider">
      <div className="container">
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: slidesToShow - 1,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: slidesToShow ,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default slider;
