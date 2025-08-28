import { Plus } from "lucide-react";
import Card from "../Card";
import Style from "./style.module.css";
import { memo } from "react";

function Modal({ open, title, children, toggle }) {
  if (!open) return null;
  return (
    <div className={Style.modal} onClick={toggle}>
      <div className={Style.card} onClick={(e) => e.stopPropagation()}>
        <div className={Style.cardHeader}>
          <h2>{title}</h2>
          <div className={Style.closeBtn} onClick={toggle}>
            <Plus className={Style.iconClose} />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default memo(Modal);
