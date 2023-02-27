import Slider from "../../components/slider/Slider";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Services from "../../components/services/Services";
import BusinessDesign from "../../components/businessDesign/BusinessDesign";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Explore from "../../components/explore/Explore";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <div className="home">
      <ScrollToTop />
      <Featured />
      <TrustedBy />
      <Slider slidesToShow={5} arrowScroll={4}>
        {cards.map((card) => (
          <CatCard card={card} key={card.id} />
        ))}
      </Slider>
      <Services />
      <Explore />
      <BusinessDesign />
      <Slider slidesToShow={4} arrowScroll={3}>
        {projects.map((card) => (
          <ProjectCard card={card} key={card.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
