import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/1">
      <div className="gigCard">
        <img src={item.img} alt="cover" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="profile" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="star icon" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="heart icon" />
          <div className="price">
            <span>STARTING AT</span>
            <h3>${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
