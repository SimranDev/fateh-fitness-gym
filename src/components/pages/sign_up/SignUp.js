import "./sign_up.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../images/logo/logo.svg";
import { ReactComponent as Fateh } from "../../../images/logo/fateh.svg";
import { ReactComponent as Fitness } from "../../../images/logo/fitness.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import useForm from "./useForm"; //Custom Hook
import validate from "./validateInfo";

const SignUp = () => {
  const { handleChange, values, handleSubmit, errors, status } = useForm(
    validate
  );

  //block non-required characters if type="Number" in <input>
  /*const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  */

  const inputHandler = (e) => {
    const { value, maxLength } = e.target;
    if (
      String(value).length >= maxLength ||
      ["e", "E", "+", "-"].includes(e.key)
    ) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="parent">
      <div className="bg-img">
        <div className="img-area">
          <div className="logo">
            <Logo className="signup-brand-logo" />
            <div className="logo-name">
              <Fateh />
              <Fitness />
            </div>
          </div>
          <div className="btm-txt">
            <p>
              Most advanced and largest fitness studio gym in district Gurdaspur
            </p>
          </div>
        </div>
      </div>
      <div className="user-details">
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-section">
            <h1>Book A Trial</h1>
            <label>
              First Name<span>*</span>
            </label>
            <input
              type="text"
              maxLength={20}
              id="firstName"
              name="firstName"
              required
              value={values.firstName}
              onChange={handleChange}
            />
            <div className="error">
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
          </div>

          <div className="input-section">
            <label>
              Last Name<span>*</span>
            </label>
            <input
              type="text"
              maxLength={20}
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              required
            />
            <div className="error">
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
          </div>
          <div className="input-section">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <div className="error"></div>
          </div>
          <div className="input-section">
            <label>
              Contact Number<span>*</span>
            </label>
            <div className="country-code-sec">
              <input
                className="country-code"
                value="+91"
                contentEditable="false"
                disabled
              ></input>

              {/* ****** CONTACT NUMBER INPUT ****** */}
              <input
                type="Number"
                maxLength={10}
                id="contactNumber"
                name="contactNumber"
                onKeyPress={inputHandler}
                value={values.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="error">
              {errors.contactNumber && <p>{errors.contactNumber}</p>}
            </div>
          </div>
          <div className="btns">
            <Link to="/" className="back-btn-link">
              <button className="back-btn">
                <IoMdArrowRoundBack size="34px" />
              </button>
            </Link>
            <button className="signup-btn btnfos-4" type="submit">
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
