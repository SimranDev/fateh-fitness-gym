import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="title">MEMBERSHIPS</h1>
      <div className="card-container">
        <div className="card" tabIndex="1"></div>
        <div className="card" tabIndex="1"></div>
        <div className="card" tabIndex="1">
          <div className="banner-container">
            <div className="banner">Limited</div>
          </div>
        </div>
        <div className="card" tabIndex="1"></div>
      </div>
    </div>
  );
};

export default Pricing;
