import Card from "../Card";
import Style from "./style.module.css";

function Loading() {
  return (
    <Card>
      <div className={Style.cardSkeleton}></div>
    </Card>
  );
}

export default Loading;
