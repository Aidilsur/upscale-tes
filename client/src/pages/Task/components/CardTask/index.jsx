import { Card } from "../../../../components";
import Style from "./card.module.css";

function CardTask({ item, onDelete, onUpdate }) {
  return (
    <Card>
      <div className={Style.cardContent}>
        <div className={Style.cardHeader}>
          <p className={Style.cardTitle}>{item?.title}</p>
          <span className={`${Style.cardStatus} ${Style[item.status]}`}>
            {item?.status}
          </span>
        </div>

        <p className={Style.cardDesc}>{item?.description}</p>

        <div className={Style.cardFooter}>
          <div className={Style.cardActions}>
            <p className={Style.cardUsername}>
              Assigned to: {item?.assignedTo?.username}
            </p>
            <div className={Style.actionButtons}>
              <button className={Style.btnEdit} onClick={() => onUpdate(item)}>
                edit
              </button>
              <button
                className={Style.btnDelete}
                onClick={() => onDelete(item?._id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardTask;
