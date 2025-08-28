import Style from "./style.module.css";

function SelectInput({
  value,
  label,
  onChange,
  id,
  options = [],
  placeholder = "",
  ...props
}) {
  return (
    <div className={Style.container}>
      {label && (
        <label className={Style.label} htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        className={Style.input}
        value={value}
        onChange={onChange}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
