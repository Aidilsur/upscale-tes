import Style from "./style.module.css";

function TextInput({ value, label, onChange, id, placeholder = "", ...props }) {
  return (
    <div className={Style.container}>
      {label && (
        <label className={Style.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={Style.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default TextInput;
