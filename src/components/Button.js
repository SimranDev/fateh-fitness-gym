import "./button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--primary--outline",
  "btn--secondary--outline",
];

const SIZES = ["btn--medium", "btn--large", "btn-mobile", "btn--wide"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const CheckButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${CheckButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
