import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container" id="memberships">
      <h1 className="title">Memberships for Everyone</h1>
      <div className="card-container">
        <div className="card" tabIndex="1">
          <div className="membership-name">
            <h3>Individual</h3>
            <h5>1 Person</h5>
          </div>
          <div className="membership-pricing">
            <h2>₹ 16500/-</h2>
            <h5>12 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <div className="membership-pricing">
            <h2>₹ 9000/-</h2>
            <h5>6 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <div className="membership-pricing">
            <h2>₹ 6800/-</h2>
            <h5>3 months</h5>
          </div>
          <h6>✔ including all premium service</h6>
        </div>
        <div className="card" tabIndex="1">
          <div className="membership-name">
            <h3>Family</h3>
            <h5>3-4 Person</h5>
          </div>
          <div className="membership-pricing">
            <h2>₹ 34000/-</h2>
            <h5>12 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <div className="membership-pricing">
            <h2>₹ 19000/-</h2>
            <h5>6 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <div className="membership-pricing">
            <h2>₹ 10000/-</h2>
            <h5>3 months</h5>
          </div>
          <h6>✔ including all premium service</h6>
        </div>

        <div className="card" tabIndex="1">
          <div className="banner-container">
            <div className="banner">Limited</div>
          </div>
          <div className="membership-name">
            <h3>Early 100 Members</h3>
            <h5>1 Person</h5>
          </div>
          <div className="membership-pricing">
            <h2>₹ 15000/-</h2>
            <h5>12 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <h6>✔ including all premium service</h6>
        </div>

        <div className="card" tabIndex="1">
          <div className="membership-name">
            <h3>Couple</h3>
            <h5>2 Person</h5>
          </div>
          <div className="membership-pricing">
            <h2>₹ 25000/-</h2>
            <h5>12 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <div className="membership-pricing">
            <h2>₹ 18000/-</h2>
            <h5>6 months</h5>
            <div className="pricing-divider"></div>
          </div>
          <div className="membership-pricing">
            <h2>₹ 12000/-</h2>
            <h5>3 months</h5>
          </div>
          <h6>✔ including all premium service</h6>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
