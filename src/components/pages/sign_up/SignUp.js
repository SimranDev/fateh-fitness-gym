import "./sign_up.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../images/logo/logo.svg";
import { ReactComponent as Fateh } from "../../../images/logo/fateh.svg";
import { ReactComponent as Fitness } from "../../../images/logo/fitness.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useForm } from "react-hook-form";

const SignUp = () => {
  /** use onKeyPress: {inputHandler} inside input 
tag to ignore some keys/alphabets that comes 
with input type:"number" **/
  //   const inputHandler = (e) => {
  //     const { value, maxLength } = e.target;
  //     if (
  //       String(value).length >= maxLength ||
  //       ["e", "E", "+", "-"].includes(e.key)
  //     ) {
  //       e.preventDefault();
  //       return;
  //     }
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);

    const endpoint =
      "https://epfcjbymob.execute-api.us-east-2.amazonaws.com/sendContactEmail";

    const body = JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      contactNumber: data.contactNumber,
      email: data.email,
    });

    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(body);
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
        <form onSubmit={handleSubmit(submitData)} noValidate>
          <div className="input-section">
            <h1>Book A Trial</h1>
            <label>
              First Name<span>*</span>
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName", {
                required: "first name required",
                maxLength: { value: 16, message: "Max alphabets 16" },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "invalid first name",
                },
              })}
            />
            <div className="error">
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
          </div>

          <div className="input-section">
            <label>
              Last Name<span>*</span>
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName", {
                required: "last name required",
                maxLength: { value: 16, message: "Max alphabets 16" },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "invalid last name",
                },
              })}
            />
            <div className="error">
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
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
                id="contactNumber"
                type="Number"
                {...register("contactNumber", {
                  required: "contact number required",
                  pattern: {
                    value: /[1-9]{1}[0-9]{9}/,
                    message: "invalid contact number",
                  },
                  maxLength: {
                    value: 10,
                    message: "number should be no more than 10 digits",
                  },
                })}
              />
            </div>
            <div className="error">
              {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
            </div>
          </div>

          <div className="input-section">
            <label>Email</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: false,
                maxLength: { value: 40, message: "max length 40" },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "invalid email address",
                },
              })}
            />
            <div className="error">
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div className="btns">
            <Link to="/" className="back-btn-link">
              <button className="back-btn">
                <IoMdArrowRoundBack size="34px" />
              </button>
            </Link>

            {/* ****** SUBMIT BUTTON ****** */}
            <button className="signup-btn btnfos-4" type="submit">
              Book Trial
            </button>
          </div>
          <div id="result-text"></div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
