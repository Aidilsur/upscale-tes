import Style from "./style.module.css";

function Card({ children }) {
  return (
    <div className={Style.card}>
      <div>{children}</div>
    </div>
  );
}

export default Card;
