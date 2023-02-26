import "./slider.scss";
import Slider from "infinite-react-carousel";


const slider = ({children, slidesToShow, arrowScroll}) => {
  return (
    <div className="slider">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default slider;
