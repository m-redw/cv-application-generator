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
