import { memo, useEffect, useState } from "react";
import { Button, Modal, TextInput } from "../../../../components";
import Style from "./style.module.css";
import SelectInput from "../../../../components/SelectInput";
import useGetUser from "../../hooks/useGetUser";
import useUpdateTask from "../../hooks/useUpdate";

function ModalUpdate({ open, data, toggle, onClose }) {
  const { data: options } = useGetUser();
  const { mutate } = useUpdateTask(data?._id);

  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: { label: "", value: "" },
    status: { label: "", value: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleAssigneChange(e, key) {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const payload = {
      ...form,
      assignedTo: form.assignedTo.value,
    };
    mutate(payload, {
      onSuccess: () => onClose(),
    });
  }

  useEffect(() => {
    if (data) {
      setForm({
        title: data?.title,
        description: data?.description,
        assignedTo: {
          label: data?.assignedTo.username,
          value: data?.assignedTo._id,
        },
        status: { label: data?.status, value: data?.status },
      });
    }
  }, [data]);

  return (
    <Modal open={open} toggle={toggle} title="Create Task">
      <div>
        <form className={Style.form} onSubmit={onSubmit}>
          <TextInput
            label="title"
            id="title"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
          <TextInput
            label="description"
            id="description"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
          <SelectInput
            id="assignTo"
            label="assignTo"
            value={form.assignedTo.value}
            onChange={(e) => handleAssigneChange(e, "assignedTo")}
            placeholder="Select assign"
            options={options}
          />
          <SelectInput
            id="status"
            label="Status"
            value={form.status.value}
            onChange={(e) => handleAssigneChange(e, "status")}
            placeholder="Select status"
            options={[
              { value: "pending", label: "Pending" },
              { value: "done", label: "Done" },
            ]}
          />
          <Button type="submit">submit</Button>
        </form>
      </div>
    </Modal>
  );
}

export default memo(ModalUpdate);
