import { Card } from "../../../../components";
import Style from "./card.module.css";

function CardQuote({ item }) {
  return (
    <Card>
      <blockquote className={Style.cardDesc}>“{item.quote}”</blockquote>
      <div className={Style.cardFooter}>
        <p className={Style.cardUsername}>
          — <em>{item.author}</em>
        </p>
      </div>
    </Card>
  );
}

export default CardQuote;
