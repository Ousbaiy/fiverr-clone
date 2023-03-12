import "./home.scss";

// COmponents
import Slider from "../../components/slider/Slider";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/CatCard";
import Services from "../../components/services/Services";
import BusinessDesign from "../../components/businessDesign/BusinessDesign";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Explore from "../../components/explore/Explore";
import ScrollToTop from "../../components/ScrollToTop";

// data
import { cards, projects } from "../../data";

// Library
import { SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="home">
      <ScrollToTop />
      <Featured />
      <TrustedBy />
      <Slider slidesToShow={5} >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <CatCard card={card} />
          </SwiperSlide>
        ))}
      </Slider>
      <Services />
      <Explore />
      <BusinessDesign />
      <Slider slidesToShow={4} >
        {projects.map((card) => (
          <SwiperSlide key={card.id}>
            <ProjectCard card={card} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
