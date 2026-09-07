export function Input({
  label,
  type = "text",
  inputName,
  inputValue,
  changeCallback,
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={inputName}
        value={inputValue}
        onChange={changeCallback}
      />
    </label>
  );
}

export function TextArea({ label, textName, textValue, changeCallback }) {
  return (
    <label>
      {label}
      <textarea
        name={textName}
        value={textValue}
        onChange={changeCallback}
      ></textarea>
    </label>
  );
}
