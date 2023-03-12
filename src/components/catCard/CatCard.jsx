import { Link } from "react-router-dom";
import "./catCard.scss";

function CatCard({ card }) {
  return (
    <>
      <Link to="/gigs?cat=design">
        <div className="catCard">
          <img src={card.img} alt="card" />
          <span className="desc">{card.desc}</span>
          <span className="title">{card.title}</span>
        </div>
      </Link>
    </>
  );
}
export default CatCard;
