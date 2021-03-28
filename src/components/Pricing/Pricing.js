import Button from "../Button";
import "./pricing.css";
import { ReactComponent as IndividualIc } from "../../images/icons/individual.svg";
import { ReactComponent as Early100Ic } from "../../images/icons/early100.svg";
import { ReactComponent as CoupleIc } from "../../images/icons/couple.svg";

import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="pricing__section" id="fb-root">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">MEMBERSHIPS</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <IndividualIc className="icon" />
                <h3>Individual</h3>
                <h4>16999/-</h4>
                <p>yearly</p>
                <ul className="pricing__container-features">
                  <li>2% Cashback</li>
                  <li>10,000 Limits</li>
                  <li>New Member</li>
                </ul>
                <Button
                  buttonStyle="btn--primary--outline"
                  buttonSize="btn--large"
                >
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <Early100Ic className="icon" />
                <h3>Early 100 Members</h3>
                <h4>14999/-</h4>
                <p>yearly</p>
                <ul className="pricing__container-features">
                  <li>2% Cashback</li>
                  <li>10,000 Limits</li>
                  <li>New Member</li>
                </ul>
                <Button
                  buttonStyle="btn--primary--outline"
                  buttonSize="btn--large"
                >
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <CoupleIc className="icon" />
                <h3>Couple</h3>
                <h4>25999/-</h4>
                <p>yearly</p>
                <ul className="pricing__container-features">
                  <li>2% Cashback</li>
                  <li>10,000 Limits</li>
                  <li>New Member</li>
                </ul>
                <Button
                  buttonStyle="btn--primary--outline"
                  buttonSize="btn--large"
                >
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
        <div
          class="fb-post"
          data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
          data-width="500"
          data-show-text="true"
        >
          <blockquote
            cite="https://www.facebook.com/20531316728/posts/10154009990506729/"
            class="fb-xfbml-parse-ignore"
          >
            Posted by{" "}
            <a href="https://www.facebook.com/facebookapp/">Facebook App</a>{" "}
            on&nbsp;
            <a href="https://www.facebook.com/20531316728/posts/10154009990506729/">
              Thursday, 27 August 2015
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
