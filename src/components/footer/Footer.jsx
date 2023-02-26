import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="box">
            <h5>Category</h5>
            <ul>
              <li>Graphics & Design</li>
              <li>Digital Marketing</li>
              <li>Writing & Translation</li>
              <li>Video & Animation</li>
              <li>Music & Audio</li>
              <li>Programming & Tech</li>
              <li>Data</li>
              <li>Business</li>
              <li>Lifestyle</li>
              <li>Photography</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="box">
            <h5>About</h5>
            <ul>
              <li>Careers</li>
              <li>Press & News</li>
              <li>Partnerships</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Intellectual Property Claims</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="box">
            <h5>Support</h5>
            <ul>
              <li>Help & Support</li>
              <li>Trust & Safety</li>
              <li>Selling on Fiverr</li>
              <li>Buying on Fiverr</li>
            </ul>
          </div>
          <div className="box">
            <h5>Community</h5>
            <ul>
              <li>Customer Success Stories</li>
              <li>Community hub</li>
              <li>Forum</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Influencers</li>
              <li>Affiliates</li>
              <li>Podcast</li>
              <li>Invite a Friend</li>
              <li>Become a Seller</li>
              <li>Community Standards</li>
            </ul>
          </div>
          <div className="box">
            <h5>More From Fiverr</h5>
            <ul>
              <li>Fiverr Business</li>
              <li>Fiverr Pro</li>
              <li>Fiverr Logo Maker</li>
              <li>Fiverr Guides</li>
              <li>Get Inspired</li>
              <li>Fiverr Select</li>
              <li>ClearVoice</li>
              <li>Fiverr Workspace</li>
              <li>Learn</li>
              <li>Working Not Working</li>
            </ul>
          </div>
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
  );
};

export default Footer;
