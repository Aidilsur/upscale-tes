import { Plus } from "lucide-react";
import { Button, Modal, TextInput } from "../../components";
import Style from "./style.module.css";
import useGetTask from "./hooks/useGetTask";
import { Loading } from "../../components";
import { useCallback, useState } from "react";
import CardTask from "./components/CardTask";
import ModalContent from "./components/ModalContent";
import ModalDelete from "./components/ModalDelete";
import useDeleteTask from "./hooks/useDeleteTask";
import ModalUpdate from "./components/ModalUpdate";
import SelectInput from "../../components/SelectInput";

function Task() {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [modalDelete, setModalDelete] = useState({
    modal: false,
    selectedId: null,
  });
  const [modalUpdate, setModalUpdate] = useState({
    modal: false,
    data: null,
  });
  const { data, isPending } = useGetTask(filter);
  const { mutate } = useDeleteTask();

  const modalToggle = useCallback(() => {
    setModal((prev) => !prev);
  }, []);

  const openModalDelete = useCallback((taskId) => {
    setModalDelete({ modal: true, selectedId: taskId });
  }, []);

  const closeModalDelete = useCallback(() => {
    setModalDelete({ modal: false, selectedId: null });
  }, []);

  const onDelete = useCallback(() => {
    mutate(modalDelete.selectedId, {
      onSuccess: () => closeModalDelete(),
    });
  }, [modalDelete, mutate, closeModalDelete]);

  const openModalUpdate = useCallback((data) => {
    setModalUpdate({ modal: true, data: data });
  }, []);

  const closeModalUpdate = useCallback(() => {
    setModalUpdate({ modal: false, selectedId: null });
  }, []);

  function handleChangeFIlter(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      <ModalContent
        open={modal}
        toggle={modalToggle}
        title="Create Task"
        onClose={() => setModal(false)}
      />
      <ModalDelete
        open={modalDelete.modal}
        toggle={closeModalDelete}
        onDelete={onDelete}
      />
      <ModalUpdate
        open={modalUpdate.modal}
        data={modalUpdate.data}
        toggle={closeModalUpdate}
        onClose={closeModalUpdate}
      />
      <div>
        <h1>Task</h1>

        <div className={Style.action}>
          <Button variant="contained" onClick={modalToggle}>
            <p>add</p>
            <Plus />
          </Button>
          <SelectInput
            id="filter"
            value={filter}
            onChange={handleChangeFIlter}
            placeholder="Select assign"
            options={[
              { value: "all", label: "semua" },
              { value: "done", label: "Done" },
              { value: "pending", label: "Pending" },
            ]}
          />
        </div>

        {isPending ? (
          <div className={Style.content}>
            <div className={Style.taskWrapper}>
              {Array(9)
                .fill(null)
                .map((_, idx) => (
                  <Loading key={idx} />
                ))}
            </div>
          </div>
        ) : null}

        <div className={Style.content}>
          {data?.length ? (
            <div className={Style.taskWrapper}>
              {data?.map((item) => (
                <CardTask
                  key={item._id}
                  item={item}
                  onDelete={openModalDelete}
                  onUpdate={openModalUpdate}
                />
              ))}
            </div>
          ) : (
            <div className={Style.noData}>
              <p>tidak ada data</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Task;
