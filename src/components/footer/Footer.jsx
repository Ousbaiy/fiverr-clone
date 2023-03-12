import "./footer.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

// data
import { sections } from "../../data";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSectionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          {sections.map((section, index) => (
            <div className="box" key={index}>
              <div className="title" onClick={() => handleSectionClick(index)}>
                <h5>{section.title}</h5>
                <img
                  src="./img/down.png"
                  alt="down-icon"
                  className={index === activeIndex ? "rotate" : ""}
                />
              </div>
              <ul className={`${index === activeIndex ? "show" : "hide"}`}>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <Link to="/" className="link">
              <h2>Fiverr</h2>
            </Link>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="socials">
              <img src="/img/twitter.png" alt="twitter" />
              <img src="/img/facebook.png" alt="facebook" />
              <img src="/img/linkedin.png" alt="linkedin" />
              <img src="/img/pinterest.png" alt="pinterest" />
              <img src="/img/instagram.png" alt="instagram" />
            </div>
            <div className="box">
              <div className="link">
                <img src="/img/language.png" alt="lang" />
                <span>English</span>
              </div>
              <div className="link">
                <img src="/img/coin.png" alt="Currency" />
                <span>USD</span>
              </div>
              <img src="/img/accessibility.png" alt="accessibility" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
