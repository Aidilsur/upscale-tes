import Style from "./style.module.css";

function Button({ children, type = "", onClick, variant = "contained" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${Style.button} ${
        variant === "contained" ? Style.buttonContained : Style.buttonOutlined
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
