import { memo } from "react";
import { Modal } from "../../../../components";

import Style from "./style.module.css";

function ModalDelete({ toggle, open, onDelete }) {
  return (
    <Modal open={open} toggle={toggle} title="Hapus Task">
      <div className={Style.modalDelete}>
        <p className={Style.message}>
          Apa kamu yakin ingin menghapus task ini?
        </p>
        <div className={Style.actions}>
          <button
            className={`${Style.button} ${Style.cancel}`}
            onClick={toggle}
          >
            Batalkan
          </button>
          <button
            className={`${Style.button} ${Style.delete}`}
            onClick={onDelete}
          >
            Hapus
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default memo(ModalDelete);
