import { memo, useState } from "react";
import { Button, Modal, TextInput } from "../../../../components";
import Style from "./style.module.css";
import SelectInput from "../../../../components/SelectInput";
import useGetUser from "../../hooks/useGetUser";
import useCreateTask from "../../hooks/useCreateTask";

function ModalContent({ open, toggle, onClose }) {
  const { data: options } = useGetUser();
  const { mutate } = useCreateTask();

  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: { label: "", value: "" },
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleAssigneChange(e) {
    setForm((prev) => ({ ...prev, assignedTo: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => onClose(),
    });
    console.log("form :", form);
    console.log("options :", options);
  }

  return (
    <Modal open={open} toggle={toggle} title="Create Task">
      <div>
        <form className={Style.form} onSubmit={onSubmit}>
          <TextInput
            label="title"
            id="title"
            name="title"
            onChange={handleChange}
          />
          <TextInput
            label="description"
            id="description"
            name="description"
            onChange={handleChange}
          />
          <SelectInput
            id="assignTo"
            label="assignTo"
            value={form.assignedTo.label}
            onChange={handleAssigneChange}
            placeholder="Select assign"
            options={options}
          />
          <Button type="submit">submit</Button>
        </form>
      </div>
    </Modal>
  );
}

export default memo(ModalContent);
