import "./businessDesign.scss";

const BusinessDesign = () => {
  return (
    <div className="business">
      <div className="container">
        <div className="item">
          <p className="small-heading">
            fiverr <span>business.</span> <span className="new">new</span>
          </p>
          <h2>
            A business solution designed for <i>teams</i>
          </h2>
          <p className="entery">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <ul>
            <li>
              <img src="./img/check.png" alt="check icon" />
              <p>Connect to freelancers with proven business experience</p>
            </li>
            <li>
              <img src="./img/check.png" alt="check icon" />
              <p>
                Get matched with the perfect talent by a customer success
                manager
              </p>
            </li>
            <li>
              <img src="./img/check.png" alt="check icon" />
              <p>
                Manage teamwork and boost productivity with one powerful
                workspace
              </p>
            </li>
          </ul>
          <button>Explore Fiverr Business</button>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt="business"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDesign;
