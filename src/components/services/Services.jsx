import "./services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="item">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <ul>
            <li>
              <div className="title">
                <img src="./img/check.png" alt="check icon" />
                <h5>The best for every budget</h5>
              </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <div className="title">
                <img src="./img/check.png" alt="check icon" />
                <h5>Quality work done quickly</h5>
              </div>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <div className="title">
                <img src="./img/check.png" alt="check icon" />
                <h5>Protected payments, every time</h5>
              </div>
              <p>
                Always know what youll pay upfront. Your payment isnt released
                until you approve the work.
              </p>
            </li>
            <li>
              <div className="title">
                <img src="./img/check.png" alt="check icon" />
                <h5>24/7 support</h5>
              </div>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div className="item">
          <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
        </div>
      </div>
    </div>
  );
};

export default Services;
